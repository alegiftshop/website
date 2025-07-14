import { useState } from "react";
import useResponsiveWidth from "../../hooks/useResponsiveWidth.jsx";
import useResponsiveColumns from "../../hooks/useResponsiveColumns.jsx";

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 4,
    name: "Product 4",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 5,
    name: "Product 5",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 6,
    name: "Product 6",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 7,
    name: "Product 7",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 8,
    name: "Product 8",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 9,
    name: "Product 9",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 10,
    name: "Product 10",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 11,
    name: "Product 11",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 12,
    name: "Product 12",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 13,
    name: "Product 13",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 14,
    name: "Product 14",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 15,
    name: "Product 15",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 16,
    name: "Product 16",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 17,
    name: "Product 17",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 18,
    name: "Product 18",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 19,
    name: "Product 19",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 20,
    name: "Product 20",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
  {
    id: 21,
    name: "Product 21",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png",
  },
];

export default function Home() {
  const smallWidth = useResponsiveWidth(1250);
  const columns = useResponsiveColumns(undefined, true);

  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll
    ? products
    : products.slice(0, Math.ceil(6));
  const gridContainer = {
    width: "100%",
    justifyContent: "center",
    marginTop: "1rem",
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "10px",
  };

  const square = {
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    backgroundColor: "lightgray",
    borderRadius: "0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1 / 1",
    gridColumn: "span 2",
    gridRow: "span 2",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: smallWidth ? "100%" : "80%",
        padding: "0 1rem",
      }}
    >
      <div style={gridContainer}>
        {displayedProducts.map((product, index) => (
          <div key={index} style={square}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src={product.image}
              alt={product.name}
            />
          </div>
        ))}
      </div>

      <div style={{ width: "100%" }}>
        <p
          onClick={() => setShowAll(!showAll)}
          style={{
            fontWeight: 500,
            display: showAll ? "none" : "inline-block",
            fontSize: "1.1rem",
            color: "royalblue",
            cursor: "pointer",
          }}
        >
          Show more
        </p>
      </div>
    </div>
  );
}
