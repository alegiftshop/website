import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

export default function Searchbar({id}) {
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
        .slice(0, 10);
      setResults(filteredItems);
    }
  }, [searchTerm, allItems]);

  return (
    <>
      <div className="px-1 py-2 flex border-[1px] border-gray-400 rounded-lg bg-white w-full">
        <button
          type="button"
          className="text-2xl hover:text-gray-500 px-2"
          alt="search"
          title="Search"
        >
          <FiSearch />
        </button>
        <input
          id={id}
          value={searchTerm}
          onChange={handleInputChange}
          autoFocus
          className="flex-grow outline-none w-full"
          placeholder="Search for products"
        />
        <div className="text-end translate-x-[-10px]">
          <button
            onClick={clearSearch}
            className={`hover:text-gray-500 ml-4 ${
              searchTerm ? "visible" : "hidden"
            }`}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="absolute bg-white rounded border border-gray-300">
        {results.map((item) => (
          <div key={item.id} className="p-2 mt-1 cursor-pointer">
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
