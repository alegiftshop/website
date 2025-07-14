import { useNavigate } from "react-router-dom";
import useResponsiveWidth from "../hooks/useResponsiveWidth";

const categories = [
  { id: 0, icon:"⭐",name: "All" },
  { id: 1, icon:"🕶️",name: "Accessories" },
  { id: 2, icon:"🪞",name: "Beauty and care" },
  { id: 3, icon:"🍬",name: "Candies" },
  { id: 4, icon:"👕",name: "Clothing" },
  { id: 5, icon:"🕹️",name: "Entertainment" },
  { id: 6, icon:"🖼️",name: "Framed pictures" },
  { id: 7, icon:"👜",name: "Handbags and wallets" },
  { id: 8, icon:"👒",name: "Headwear" },
  { id: 9, icon:"🏠",name: "Home decor" },
  { id: 10, icon:"💍", name: "Jewelry" },
  { id: 11, icon:"💄", name: "Makeup" },
  { id: 12, icon:"🎉", name: "Par-tay" },
  { id: 13, icon:"👠", name: "Shoes" },
  { id: 14, icon:"✏️", name: "Stationery" },
  { id: 15, icon:"🛠️", name: "Tools" },
  { id: 16, icon:"🧸", name: "Toys" },
]; 

export default function Categories(props) {

  const smallWidth = useResponsiveWidth();
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => {
            navigate("/products");
            props.closeOffcanvas();
          }}
          className="option"
        >
          {category.icon}&nbsp;{category.name}
        </div>
      ))}
    </div>
  );
}
