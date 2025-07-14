import { useState, useEffect } from "react";
import Counter from "./Counter";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = (e) => {
    if (e.target.id !== props.id) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div
      id={props.id}
      style={{ position: "relative" }}
      onClick={(e) => {
        e.stopPropagation();
        toggleDropdown();
      }}
    >
      <Counter title={props.title} icon={props.icon} />

      {isOpen && (
        <div
          style={{
            right: 0,
            position: "absolute",
            transform: "translate(0, 8px)",
            backgroundColor: "white",
            outline:"1px solid lightgray",
            borderRadius: "0.5rem",
            zIndex: 100,
          }}
        >
          {props.content}
        </div>
      )}
    </div>
  );
}
