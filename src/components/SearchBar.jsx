import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {setSearchTerm(event.target.value)};
  const clearSearch = () => {setSearchTerm("")};
  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-lg py-2 bg-white w-full">
        <button className="text-2xl px-2" alt="search" title="Search">
          <FiSearch />
        </button>
        <input value={searchTerm} onChange={handleInputChange} className="flex-grow outline-none w-full" placeholder="Search..."/>
        <div className="text-end translate-x-[-10px]">
        <button onClick={clearSearch} className={`text-gray-500 hover:text-gray-700 ${searchTerm ? 'visible' : 'hidden'}`}>✕</button>
        </div>
      </div>
    </>
  );
}
