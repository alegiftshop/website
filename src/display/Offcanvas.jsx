import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaEquals } from "react-icons/fa6";
import useIsDesktop from "../hooks/useIsDesktop";
import useResponsiveWidth from "../hooks/useResponsiveWidth";
import RoundButton from "../components/RoundButton";

export default function Offcanvas() {
  const navigate = useNavigate();
  const smallWidth = useResponsiveWidth();
  const isDesktop = useIsDesktop();
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

 

  const splitName = (name) => {
    const [icon, ...rest] = name.split(" ");
    const title = rest.join(" ");
    return { icon, title };
  };
  

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      {smallWidth || !isDesktop ? (
        <button type="button" onClick={toggleOffcanvas} title={"Categories"}>
          {<FaEquals style={{ fontSize: "1.3rem" }} />}
        </button>
      ) : (
        <RoundButton
          id={"categories"}
          title={"Categories"}
          onClick={toggleOffcanvas}
          icon={<FiMenu style={{ fontSize: "1.5rem" }} />}
        />
      )}
      {isOpen && (
        <div
          onClick={closeOffcanvas}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        ></div>
      )}
      <div
        className={`offcanvas ${isOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "320px",
          maxWidth: "80%",
          height: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <div className="subtitle">Categories</div>
          <button onClick={closeOffcanvas} style={{ fontSize: "1.7rem" }}>
            &times;
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.1rem",
            padding: "0 1rem",
          }}
        >
          
              {categories.map((category, index) => {
                const { icon, title } = splitName(category.name);
                return (
                  <tr key={index}>
                    <td style={{width:"50px"}} >{icon}</td>
                    <td style={{width:"auto"}}>{title}</td>
                  </tr>
                );
              })}
         
        </div>
      </div>
    </>
  );
}
