import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex flex-row space-x-3 pb-2 text-3xl">
    <a href="https://facebook.com/alegiftshop" title="Facebook" alt="Facebook">
      <FaFacebook />
    </a>
    <a href="https://instagram.com/alegiftshop" title="Instagram" alt="Instagram">
      <FaInstagram />
    </a>
    <a href="https://pinterest.com/alegiftshop" title="Pinterest" alt="Pinterest">
      <FaPinterest />
    </a>
    <a href="https://tiktok.com/@alegiftshop" title="TikTok" alt="TikTok">
      <FaTiktok />
    </a>
    <a href="https://youtube.com/@alegiftshop" title="YouTube" alt="YouTube">
      <FaYoutube />
    </a>
  </div>
  )
}
