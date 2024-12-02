import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="flex flex-row space-x-3 pb-2 text-3xl">
    <a href="https://facebook.com" title="Facebook" alt="Facebook">
      <FaFacebook />
    </a>
    <a href="https://instagram.com" title="Instagram" alt="Instagram">
      <FaInstagram />
    </a>
    <a href="https://pinterest.com" title="Pinterst" alt="Pinterest">
      <FaPinterest />
    </a>
    <a href="https://tiktok.com" title="TikTok" alt="TikTok">
      <FaTiktok />
    </a>
    <a href="https://x.com" title="X" alt="X">
      <BsTwitterX />
    </a>
  </div>
  )
}
