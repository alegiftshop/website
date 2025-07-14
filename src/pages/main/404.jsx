import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div
      style={{

        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        position: "fixed",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          fontSize: "210px",
          fontWeight: 900,
        }}
      >
        404
      </div>
      <div
        style={{
          fontSize: "45px",
          fontWeight: "bold",
        }}
      >
        Page not found!
      </div>
      <Link to="/">
        <p style={{ fontSize: "23px", fontWeight: 500 }}>Go Home</p>
      </Link>
    </div>
  );
}
