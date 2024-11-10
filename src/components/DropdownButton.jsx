import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default function DropdownButton({ head, content, title, alt }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block" alt={alt}>
      <Button onClick={toggleDropdown} variant="light" className="text-2xl" title={title}>
        {head}
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg">
          <div className="p-2">{content}</div>
        </div>
      )}
    </div>
  );
}
