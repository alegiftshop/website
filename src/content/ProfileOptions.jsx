import { IoMdPin } from "react-icons/io";
import { HiMiniLanguage } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";

export default function ProfileOptions() {
  return (
    <ul className="dropdown-container">
      <li className="option-list">
        <IoMdPin />
        <p>Locations</p>
      </li>
      <li className="option-list">
        <HiMiniLanguage />
        <p>Language</p>
      </li>
      <li className="option-list">
        <MdFavorite />
        <p>Favorites</p>
      </li>
      <li className="option-list">
        <FaShieldAlt />
        <p>Restricted mode</p>
      </li>
      <li className="option-list">
        <RiSettings4Fill />
        <p>Settings</p>
      </li>
    </ul>
  );
}
