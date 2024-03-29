import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResultsSuggestionContainer = ({ suggestion,setSearchQuery}) => {
  console.log(setSearchQuery)
  if (!suggestion) return null;
  return (
    <div className="dark:bg-zinc-900">
      <Link to={`/results?search_query=${suggestion}`} onClick={(e) => setSearchQuery('')}>
        <p
          className="p-1 px-2 hover:bg-gray-700 
             cursor-pointer"
        >
          <FaSearch className="inline mr-2 font-thin text-sm text-gray-600" />
          {suggestion}
        </p>
        </Link>
    </div>
  );
};



export default ResultsSuggestionContainer;
