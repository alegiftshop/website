import { useState } from "react";
import RoundButton from "./RoundButton";

export default function Counter(props) {
  const [count, setCount] = useState(1);

  return (
    <div id={props.id} style={{ position: "relative" }}>
  
        {count > 0 && (
          <span
            style={{
              aspectRatio: 1,
              zIndex: 100,
              position: "absolute", transform: "translate(27px, -6px)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "1.1rem",
              fontSize: "0.75rem",
              color: "white",
              background: "#dc2626",
              borderRadius: "50%"
            }}
          >
            {count}
          </span>
        )}
     

      <RoundButton
        icon={props.icon}
        title={props.title}
        onClick={props.onClick}
      />
    </div>
  );
}
