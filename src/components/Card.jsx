const StarRating = ({ rating, maxStars = 5 }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
      {[...Array(maxStars)].map((_, index) => (
        <span key={index} style={{ fontSize: "1.3rem", color:"orange" }}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default function Card({ product }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        borderRadius: "0.75rem",
        gap: "0.5rem",
        cursor: "pointer",
        border: "2px solid lightgray",
      }}
    >
      <img
        alt={product.name}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "1/1",
          objectFit: "cover",
          borderRadius: "0.5rem",
        }}
        src={product.image}
      />
      <div
        style={{
          flex: 1,
          gap: "0.3rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "1.2rem", fontWeight: 500 }}>
          {product.name}
        </div>
        <div>{product.price}</div>
        <div>{product.description}</div>


        <div style={{ display: "flex", alignItems: "center" }}>
          {product.rating && <StarRating rating={product.rating} />}&nbsp;
          {product.ratings > 1 && <span>{`(${product.ratings})`}</span>}
        </div>
      </div>
      <button
        onClick={() => alert("Added to cart!")}
        className="base-button primary-button"
      >
        Buy
      </button>
    </div>
  );
}
