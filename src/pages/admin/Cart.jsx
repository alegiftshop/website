import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <p>You have no items in your cart</p>
      <Link to={"/"}>Go home</Link>
    </div>
  );
}
