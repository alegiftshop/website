import logo from "./logo.svg";

export default function Logo({ size }) {
  return (
    <div style={{ ...size }}>
      <img src={logo} alt="Logo" style={{ height: "100%" }} />
    </div>
  );
}
