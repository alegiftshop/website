import { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [results, setResults] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Fetch all users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setAllUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Filter users based on the query
  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
    } else {
      const filteredUsers = allUsers
        .filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 10);
      setResults(filteredUsers);
    }
  }, [searchTerm, allUsers]);

  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-lg py-[6px] bg-white w-full">
        <button
          className="text-2xl hover:text-gray-500 px-2"
          alt="search"
          title="Search"
        >
          <FiSearch />
        </button>
        <input
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow outline-none w-full"
          placeholder="Search..."
        />
        <div className="text-end translate-x-[-10px]">
          <button
            onClick={clearSearch}
            className={`hover:text-gray-500 ${
              searchTerm ? "visible" : "hidden"
            }`}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="mt-1 absolute bg-white rounded border border-gray-300">
        {results.map((user) => (
          <div key={user.id} className="p-2 mt-1 ">
            {user.name}
          </div>
        ))}
      </div>
    </>
  );
}
