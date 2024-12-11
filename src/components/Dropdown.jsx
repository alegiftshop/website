import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ title, link, children, head, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      {children}
        <Link to={link} title={title} className="light-button text-2xl inline-block">
          {head}
        </Link>
     
      {isOpen && (
        <div className="absolute right-0 bg-white rounded-lg hidden md:block z-[100]">
          {content}
        </div>
      )}
    </div>
  );
}
