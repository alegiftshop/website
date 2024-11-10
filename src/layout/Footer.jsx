import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row space-x-4">
        <a href="https://facebook.com" title="Facebook" alt="Facebook"><FaFacebook className="text-4xl"/></a>
        <a href="https://tiktok.com" title="TikTok" alt="TikTok"><FaTiktok className="text-4xl"/></a>
        <a href="https://instagram.com" title="Instagram" alt="Instagram"><FaInstagram className="text-4xl"/></a>
        <a href="https://youtube.com" title="YouTube" alt="YouTube"><FaYoutube className="text-4xl"/></a>
        <a href="https://pinterest.com" title="YouTube" alt="YouTube"><FaPinterest className="text-4xl"/></a>
        <a href="https://snapchat.com" title="Snapchat" alt="Snapchat"><FaSnapchat className="text-4xl"/></a>
      </div>
      <p>&copy; {year}, The Local Company</p>
    </div>
  );
}

