import { useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Modal({ onClose, title, children }){
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        top: 0,
        left: 0,
        zIndex: 100,
        position: "fixed",
        padding: "1rem",
        paddingRight: "0.1rem",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          marginBottom: "1.1rem",
          gap: "0.8rem",
        }}
      >
        <button type="buton" title={"Back"} onClick={onClose}>
          <IoMdArrowRoundBack style={{ fontSize: "1.5rem" }} />
        </button>
        <div style={{ fontSize: "1.4rem" }}>{title}</div>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
       {children}
      </div>
    </div>
  );
};
