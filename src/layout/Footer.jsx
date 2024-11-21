import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex flex-row justify-evenly w-full">
        <ul>
          <li className="font-bold">Sections</li>
          <Link to="/about">
            <li className="hover:underline">About us</li>
          </Link>
          <Link to="/faq">
            <li className="hover:underline">FAQ</li>
          </Link>
        </ul>
        <ul>
          <li className="font-bold">Information & Support</li>
          <Link to="/terms">
            <li className="hover:underline">Terms of use</li>
          </Link>
        </ul>
        <ul>
          <li className="font-bold">Payment methods</li>
          <Link>
          <li className="hover:underline">bbva</li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-row justify-evenly w-full">
        <p>&copy; {year}, The Local Company</p>
        <div className="flex flex-row space-x-3">
          <a href="https://facebook.com" title="Facebook" alt="Facebook">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="https://tiktok.com" title="TikTok" alt="TikTok">
            <FaTiktok className="text-3xl" />
          </a>
          <a href="https://instagram.com" title="Instagram" alt="Instagram">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://youtube.com" title="YouTube" alt="YouTube">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="https://pinterest.com" title="Pinterst" alt="Pinterest">
            <FaPinterest className="text-3xl" />
          </a>
          <a href="https://snapchat.com" title="Snapchat" alt="Snapchat">
            <FaSnapchat className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
