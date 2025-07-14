import { useState } from "react";

export default function CounterSm(props) {
  const [count, setCount] = useState(1);
  return (
    <div type="button" style={{ position: "relative" }}>
      {count > 0 && (
        <span
          style={{
            aspectRatio: 1,
            zIndex: 100,
            position: "absolute",
            transform: "translate(27px, -6px)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "0.8rem",
            fontSize: "0.7rem",
            color: "white",
            background: "#dc2626",
            borderRadius: "50%",
          }}
        >
          {count}
        </span>
      )}
      <button
        title={props.title}
        onClick={props.onClick}
        style={{...props.style}}
      >
        {props.icon}
      </button>
    </div>
  );
}
