import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCount = content?.selected?.length || 0; 
  const toggleState = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        onClick={toggleState}
        style={{
          fontWeight: 500,
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.1rem",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        <span>{title}({selectedCount})</span>
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      <div
        style={{
          width: "100%",
          display: isOpen ? "flex" : "none",
          float: "left",
        }}
      >
        {content}
      </div>
    </>
  );
}
