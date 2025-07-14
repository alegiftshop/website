import { Outlet, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/main/Home.jsx";
import Error from "./pages/main/404.jsx";
import Index from "./pages/main/Index.jsx";
import Cart from "./pages/admin/Cart.jsx";
import Notifications from "./pages/admin/Notifications.jsx";
import Profile from "./pages/admin/Account.jsx";
import Products from "./pages/main/Products.jsx";
import Product from "./pages/main/Product.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import PasswordRecovery from "./pages/auth/PasswordRecovery.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import Logo from "./assets/Logo.jsx";
import Header from "./layout/Header.jsx";
import HeaderSm from "./layout/HeaderSm.jsx";
import Footer from "./layout/Footer.jsx";
import useIsDesktop from "./hooks/useIsDesktop.jsx";
import useResponsiveWidth from "./hooks/useResponsiveWidth.jsx";


const MainLayout = () => {
  const smallWidth = useResponsiveWidth();
  const isDesktop = useIsDesktop();

  return (
    <>
      {smallWidth || !isDesktop ? <HeaderSm /> : <Header />}
      <main
        style={{
          minHeight: "calc(100vh - 130px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const AuthLayout = () => {
  return (
    <>
      <main
        style={{
          height: "calc(100vh - 76px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <Link to={"/"} title="Home">
          <Logo size={{ height: "3.2rem" }} />
        </Link>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default function Router() {
  
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messenger" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/index" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
