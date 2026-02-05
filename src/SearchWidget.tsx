/**
 * Search Widget Component
 *
 * This component provides a simple search interface that allows users to enter a query and perform a search using the SearxNG search engine. The search results will open in a new tab.
 * */
import React, {useState} from "react";

const url = "https://searx.party/search?q=";

export default function SearchWidget() {
  const [query, setQuery] = useState("");

  const submitQuery = function () {
    window.open(url + encodeURIComponent(query), "_blank");
  }

  const handleKeyDown = function (event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      submitQuery();
    }
  }

  const handleInputChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
      <h3 className="font-bold text-blue-600">Search Widget</h3>
      <div className="flex items-center mt-4 gap-2">
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="text-black w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={submitQuery}
          className="bg-amber-600 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          &#x1F50D;
        </button>
      </div>
    </div>
  );

}
