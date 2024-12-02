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
      <button type="button" className="light-button text-2xl" >
        <Link to={link} title={title}>
          {head}
        </Link>
      </button>
      {isOpen && (
        <div className="py-2 px-3 absolute right-0 bg-white rounded-lg hidden md:block">
          {content}
        </div>
      )}
    </div>
  );
}
