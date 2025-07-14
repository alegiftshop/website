import useResponsiveWidth from "../../hooks/useResponsiveWidth.jsx";
import ProductGrid from "../../layout/ProductGrid.jsx";
import Topbar from "../../layout/Topbar.jsx";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    rating: 4,
    ratings: 1,
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    rating: 4.2,
    ratings: 3,
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    rating: 3,
    description: "Free shipping",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 4,
    name: "Product 1",
    price: "$10",
    rating: 4.7,
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 5,
    name: "Product 2",
    price: "$20",
    rating: 2.7,
    ratings: 3,
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 6,
    name: "Product 3",
    price: "$30",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 7,
    name: "Product 4",
    price: "$40",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 8,
    name: "Product 5",
    price: "$50",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 9,
    name: "Product 6",
    price: "$60",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 10,
    name: "Product 1",
    price: "$10",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 11,
    name: "Product 2",
    price: "$20",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 12,
    name: "Product 3",
    price: "$30",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 13,
    name: "Product 1",
    price: "$10",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 14,
    name: "Product 2",
    price: "$20",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 15,
    name: "Product 3",
    price: "$30",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 16,
    name: "Product 4",
    price: "$40",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 17,
    name: "Product 5",
    price: "$50",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 18,
    name: "Product 6",
    price: "$60",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 19,
    name: "Product 1",
    price: "$10",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 20,
    name: "Product 2",
    price: "$20",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 21,
    name: "Product 4",
    price: "$40",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 22,
    name: "Product 5",
    price: "$50",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 23,
    name: "Product 6",
    price: "$60",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 24,
    name: "Product 1",
    price: "$10",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
  {
    id: 25,
    name: "Product 2",
    price: "$20",
    image:
      "https://grenson.sirv.com/s-nomnt8gvvb/images/stencil/original/products/1686/3132/sneaker51_113644_threequarter_print__18581.1643629398.jpg?w=2560",
  },
];

const subcategories = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
  { id: 4, name: "Option 4" },
  { id: 5, name: "Option 5" },
  { id: 6, name: "Option 6" },
  { id: 7, name: "Option 7" },
  { id: 8, name: "Option 8" },
  { id: 9, name: "Option 9" },
  { id: 10, name: "Option 10" },
  { id: 11, name: "Option 11" },
  { id: 12, name: "Option 12" },
  { id: 13, name: "Option 13" },
  { id: 14, name: "Option 14" },
  { id: 15, name: "Option 15" },
  { id: 16, name: "Option 16" },
];

export default function Products({ category }) {
  const smallWidth = useResponsiveWidth();

  return (
    <div
      style={{
        width: !smallWidth && "92vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.3rem 0.1rem",
        gap: "0.3rem",
      }}
    >
     

      <Topbar title={"Category" || category} subcategories={subcategories}  />
   
      <ProductGrid products={products} />
    </div>
  );
}
