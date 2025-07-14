import useResponsiveWidth from "../../hooks/useResponsiveWidth";

export default function Product() {
  const smallWidth = useResponsiveWidth();
  const smallWidth2 = useResponsiveWidth(1024);
  const smallWidth3 = useResponsiveWidth(1450);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: smallWidth ? "100%" : smallWidth2 ? "80%" : "75%",
      padding: "1rem",
    },
    tag: {
      width:"100%",
      display: "flex",
      gap: "1rem",
      flexDirection: smallWidth2 ? "column" : "row",
    },

    image: {
      aspectRatio: 1,
      width: smallWidth2 ? "100%" : smallWidth3 ? "75%" : "45%",
      borderRadius: "0.5rem",
      background: "pink",

    },
    details: {
      display: "flex",
      flexDirection: "column",
  
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.tag}>
        <div style={styles.image}></div>
        <div style={styles.details}>
          <h2>Product Title</h2>
          <p>
            This is a description of the product. It highlights the features and
            benefits.
          </p>
          <p>$19.99</p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              style={{
                padding: "0.5rem 1rem",
                background: "lightblue",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add to Cart
            </button>
            <button
              style={{
                padding: "0.5rem 1rem",
                background: "lightgreen",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
<div>
  
        <h2>Add a presentation</h2>
        <p>Envelope</p>
        <p>Bow</p>
        <p>Card</p>
</div>
    </div>
  );
}
