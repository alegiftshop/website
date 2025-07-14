import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { MdCamera } from "react-icons/md";
import axios from "axios";
import RoundButton from "./RoundButton";

export default function Searchbar({}) {
  const [results, setResults] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Fetch all Items from the API when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setAllItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  // Filter Items based on the query

  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
    } else {
      const filteredItems = allItems
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 12);
      setResults(filteredItems);
    }
  }, [searchTerm, allItems]);

  // Reference for the searchbar width

  const sourceRef = useRef(null);
  const [sourceWidth, setSourceWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (sourceRef.current) {
        setSourceWidth(sourceRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);


  return (
    <>
      <div
        ref={sourceRef}
        className="border"
        style={{
          borderRadius: "100px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <RoundButton title={"Search"} icon={<FiSearch />} />

        <input
          id={"searchinput"}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search"
          autoFocus
          style={{
            width: "100%",
            fontSize: "18px",
            border: "none",
            outline: "none",
          }}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            style={{
              cursor: "pointer",
              fontSize: "1.7rem",
              margin: "0 8px",
            }}
          >
            &times;
          </button>
        )}

        <RoundButton title={"Camera"} icon={<MdCamera />} />
      </div>

      {results.length > 0 && (
        <div
                className="border"
          style={{
            width: `${sourceWidth}px`,
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            padding: "0.5rem 1rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {results.map((item) => (
            <div key={item.id} className="option">
              <FiSearch />
              &nbsp;{item.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
