import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or category"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-4 pl-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition-all"
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transform hover:scale-[1.02] transition-all duration-200 font-semibold"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
