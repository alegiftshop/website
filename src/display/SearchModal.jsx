import { useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function SearchModal({ onClose, title, children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          fontWeight: 500,
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginBottom: "1.1rem",
          gap: "0.8rem",
        }}
      >
        <button type="buton" title={"Back"} onClick={onClose}>
          <IoMdArrowRoundBack style={{ fontSize: "1.5rem" }} />
        </button>

        <input
          type="search"
          placeholder="Search"
          style={{ width: "100%" }}
        />

        <button type="buton" title={"Clear"} style={{ fontSize: "1.2rem" }}>
          &times;
        </button>
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
}
