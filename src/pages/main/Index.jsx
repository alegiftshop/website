import { useState, useEffect } from "react";
import api from "../../api/connection/api.js";
import endpoints from "../../api/connection/endpoints.js";

export default function Index() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [section, setSection] = useState("");

  const handleSelection = (selection) => {
    setSection(selection.title);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(endpoints.fetchSections);
        if (response.status !== 200) {
          throw new Error("Failed to fetch information");
        }
        setData(response.data);
        console.log(response.data);
        if (response.data.length > 0) {
          setSection(response.data[0].title);
        }
      } catch (err) {
        console.error("Error fetching information:", err.message);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "1200px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <ul
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "10px 20px",
              listStyle: "none",
              margin: "0",
            }}
          >
            {data.map((item, index) => (
              <li
                key={index}
                style={{ cursor: "pointer", margin: "5px 0" }}
                onClick={() => handleSelection(item)}
              >
                •&nbsp;{item.title}
              </li>
            ))}
          </ul>
        )}
        <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>{section}</div>
        <div style={{ whiteSpace: "pre-line" }}>
          {data.find((item) => item.title === section)?.content || ""}
        </div>

      </div>
    </div>
  );
}
