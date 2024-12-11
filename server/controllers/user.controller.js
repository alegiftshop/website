import sendEmail from "../config/sendEmail.js";
import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import verifyEmailTemplate from "../utils/verifyEmailTemplate.js";
import generateAccessToken from "../utils/generatedAccessToken.js";
import generteRefreshToken from "../utils/generatedRefreshToken.js";
import uploadImageCloudinary from "../utils/uploadImageCloudinary.js";
import generatedOtp from "../utils/generatedOtp.js";
import forgotPasswordTemplate from "../utils/forgotPasswordTemplate.js";
import jwt from "jsonwebtoken";
import { z } from "zod";

// REGISTER USER

export async function registerUserController(request, response) {
  try {
    const { name, dob, email, password } = request.body;

    if (!name || !dob || !email || !password) {
      return response.status(400).json({
        message: "Provide all the required fields to continue",
        error: true,
        success: false,
      });
    }

    const nameSchema = z.string().max(20, { message: "Name is too long" });
    const nameResult = nameSchema.safeParse(name);
    if (!nameResult.success) {
      const firstError = nameResult.error.errors[0].message || "Invalid name";
      return response.json({
        message: firstError,
        error: true,
        success: false,
      });
    }

    const dobSchema = z.string().refine(
      (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        const day = today.getDate() - birthDate.getDate();

        return (
          age > 18 || (age === 18 && (month > 0 || (month === 0 && day >= 0)))
        );
      },
      {
        message: "You must be at least 18 years old to register",
      }
    );
    const dobResult = dobSchema.safeParse(dob);
    if (!dobResult.success) {
      const firstError = dobResult.error.errors[0].message || "Invalid DOB";
      return response.json({
        message: firstError,
        error: true,
        success: false,
      });
    }

    const emailSchema = z.string().email();
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      return response.json({
        message: "Invalid email",
        error: true,
        success: false,
      });
    }

    const passwordSchema = z
      .string()
      .min(10, { message: "Password must be at least 10 characters long" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#\$%\^&\*])/, {
        message:
          "The password must contain letters, numbers and symbols (! @ # $ % ^ & *)",
      });
    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      const firstError =
        passwordResult.error.errors[0].message || "Invalid password";
      return response.json({
        message: firstError,
        error: true,
        success: false,
      });
    }

    const emailExists = await userModel.findOne({ email });

    if (emailExists) {
      return response.json({
        message: "Email already registered",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      dob,
      email,
      password: hashPassword,
    };

    const newUser = new userModel(payload);
    newUser.username = newUser._id;
    const save = await newUser.save();

    const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`;

    const verifyEmail = await sendEmail({
      sendTo: email,
      subject: "Verification email",
      html: verifyEmailTemplate({
        name,
        url: VerifyEmailUrl,
      }),
    });

    return response.json({
      message: "User registered successfully",
      error: false,
      success: true,
      data: save,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// VERIFY EMAIL

export async function verifyEmailController(request, response) {
  try {
    const { code } = request.body;

    const user = await userModel.findOne({ _id: code });

    if (!user) {
      return response.status(400).json({
        message: "User not found.",
        error: true,
        success: false,
      });
    }

    const updateUser = await userModel.updateOne(
      { _id: code },
      {
        verify_email: true,
      }
    );

    return response.json({
      message: "Email verification complete.",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// LOGIN

export async function loginController(request, response) {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        message: "Provide email and password",
        error: true,
        success: false,
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return response.status(400).json({
        message: "User not registered.",
        error: true,
        success: false,
      });
    }

    if (user.status !== "Active") {
      return response.status(400).json({
        message: "Contact the administrator.",
        error: true,
        success: false,
      });
    }

    const checkPassword = bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return response.status(400).json({
        message: "Incorrect password.",
        error: true,
        success: false,
      });
    }

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generteRefreshToken(user._id);

    const updateUser = await userModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    response.cookie("accessToken", accessToken, cookiesOption);
    response.cookie("refreshToken", refreshToken, cookiesOption);

    return response.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// LOGOUT

export async function logoutController(request, response) {
  try {
    const userid = request.userId; //middleware

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await userModel.findByIdAndUpdate(userid, {
      refresh_token: "",
    });

    return response.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// UPLOAD AVATAR

export async function uploadAvatar(request, response) {
  try {
    const userId = request.userId; // auth middlware
    const image = request.file; // multer middleware

    const upload = await uploadImageCloudinary(image);

    const updateUser = await userModel.findByIdAndUpdate(userId, {
      avatar: upload.url,
    });

    return response.json({
      message: "Profile image uploaded",
      success: true,
      error: false,
      data: {
        _id: userId,
        avatar: upload.url,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//UPDATE USER INFORMATION

export async function updateUserDetails(request, response) {
  try {
    const userId = request.userId; //auth middleware
    const { name, email, mobile, password } = request.body;

    let hashPassword = "";

    if (password) {
      const salt = await bcryptjs.genSalt(10);
      hashPassword = await bcryptjs.hash(password, salt);
    }

    const updateUser = await userModel.updateOne(
      { _id: userId },
      {
        ...(name && { name: name }),
        ...(email && { email: email }),
        ...(mobile && { mobile: mobile }),
        ...(password && { password: hashPassword }),
      }
    );

    return response.json({
      message: "User information updated successfully",
      error: false,
      success: true,
      data: updateUser,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// FORGOT PASSWORD

export async function forgotPasswordController(request, response) {
  try {
    const { email } = request.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return response.status(400).json({
        message: "Email not found",
        error: true,
        success: false,
      });
    }

    const otp = generatedOtp();
    const expireTime = new Date() + 60 * 60 * 1000; // 1hr

    const update = await userModel.findByIdAndUpdate(user._id, {
      forgot_password_otp: otp,
      forgot_password_expiry: new Date(expireTime).toISOString(),
    });

    await sendEmail({
      sendTo: email,
      subject: "Password recovery",
      html: forgotPasswordTemplate({
        name: user.name,
        otp: otp,
      }),
    });

    return response.json({
      message: "Check your email to proceed with your password retrieval",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// VERIFY FORGOT PASSWORD

export async function verifyForgotPasswordOtp(request, response) {
  try {
    const { email, otp } = request.body;

    if (!email || !otp) {
      return response.status(400).json({
        message: "Provide required fields (email, OTP)",
        error: true,
        success: false,
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return response.status(400).json({
        message: "Email not available",
        error: true,
        success: false,
      });
    }

    const currentTime = new Date().toISOString();

    if (user.forgot_password_expiry < currentTime) {
      return response.status(400).json({
        message: "OTP is expired",
        error: true,
        success: false,
      });
    }

    if (otp !== user.forgot_password_otp) {
      return response.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }

    // If OTP is not expired and is equal to user.forgot_password_otp

    const updateUser = await userModel.findByIdAndUpdate(user?._id, {
      forgot_password_otp: "",
      forgot_password_expiry: "",
    });

    return response.json({
      message: "Verify otp successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// RESET THE PASSWORD

export async function resetpassword(request, response) {
  try {
    const { email, newPassword, confirmPassword } = request.body;

    if (!email || !newPassword || !confirmPassword) {
      return response.status(400).json({
        message: "Provide required fields",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return response.status(400).json({
        message: "Email is not available",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmPassword) {
      return response.status(400).json({
        message: "Passwords don't match.",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(newPassword, salt);

    const update = await userModel.findOneAndUpdate(user._id, {
      password: hashPassword,
    });

    return response.json({
      message: "Password updated successfully.",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// REFRESH TOKEN

export async function refreshToken(request, response) {
  try {
    const refreshToken =
      request.cookies.refreshToken ||
      request?.headers?.authorization?.split(" ")[1]; // [Bearer Token]

    if (!refreshToken) {
      return response.status(401).json({
        message: "Invalid token",
        error: true,
        success: false,
      });
    }

    const verifyToken = jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH_TOKEN
    );

    if (!verifyToken) {
      return response.status(401).json({
        message: "token is expired",
        error: true,
        success: false,
      });
    }

    const userId = verifyToken?._id;

    const newAccessToken = await generateAccessToken(userId);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.cookie("accessToken", newAccessToken, cookiesOption);

    return response.json({
      message: "New Access token generated",
      error: false,
      success: true,
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// USER DETAILS

export async function userDetails(request, response) {
  try {
    const userId = request.userId;

    console.log(userId);

    const user = await userModel
      .findById(userId)
      .select("-password -refresh_token");

    return response.json({
      message: "User details",
      data: user,
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong",
      error: true,
      success: false,
    });
  }
}
