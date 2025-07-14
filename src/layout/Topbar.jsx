import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import useResponsiveWidth from "../hooks/useResponsiveWidth.jsx";

export default function Topbar(props) {
  const smallWidth = useResponsiveWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleState = (setter) => {
    setter((prevState) => !prevState);
  };

  const handleSelection = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const resetSelected = (e) => {
    e.stopPropagation();
    setSelected([]);
  };

  return (
    <>
      <style>
        {`
      .pill-container {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .pill-button {
        border: 2px solid lightgray;
        background: white;
        color: dimgray;
        border-radius: 50px;
        padding: 7px 14px;
        font-size: 16px;
      }

      .pill-button:hover {
        background: lightgray;
      }

      .pill-button.active {
        border: 2px solid black;
        background: black;
        color: white;
      }

       @media (max-width: 768px) {
        .pill-container {
        gap: 5px; 
      }

        .pill-button {
        padding: 6px 12px; 
        font-size: 15px;  
      }
    `}
      </style>
      <div style={{ width: "99%", padding: "0.5rem 0.1rem" }}>
        <div
          style={{
            fontWeight: 500,
            display: "flex",
            position: "relative",
            alignItems: "center",
            paddingLeft: "0.6rem",
          }}
        >
          <div
            onClick={() => toggleState(setIsOpen)}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="subtitle"
          >
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}&nbsp;
            {props.title}
            &nbsp;
            {selected.length > 0 && (
              <button
                type="button"
                title="Reset"
                onClick={resetSelected}
                style={{ fontSize: "1.7rem" }}
              >
                &nbsp;&times;&nbsp;
              </button>
            )}
          </div>
          <button
            title="Filter"
            type="button"
            onClick={() => toggleState(setFilter)}
            style={{ fontSize: "1.5rem" }}
          >
            {filter ? "★" : "☆"}
          </button>
        </div>

        {isOpen && (
          <div className="pill-container">
            {props.subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                className={`pill-button ${
                  selected.includes(subcategory.id) ? "active" : ""
                }`}
                onClick={() => handleSelection(subcategory.id)}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
