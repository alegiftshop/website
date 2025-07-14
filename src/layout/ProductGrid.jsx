import Card from "../components/Card.jsx";
import useResponsiveColumns from "../hooks/useResponsiveColumns.jsx";

  


export default function ProductGrid({ products }) {
  const columns = useResponsiveColumns();
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "0.5rem",
          padding: "0 0.5rem",
        }}
      >
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div>Pagination</div>
    </>
  );
}
