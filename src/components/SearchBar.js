import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addToCache } from "../utils/CacheSlice";
import ResultsSuggestionContainer from "./ResultsSuggestionContainer";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const cache = useSelector((store) => store.searchSuggestionCache.cache);
 
  

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchSuggestions(searchQuery);
    }, 200);

    // eslint-disable-next-line
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchSearchSuggestions = async (searchQuery) => {
    if (cache[searchQuery]) {
      setSuggestions(cache[searchQuery]);
    } else {
      const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const jsonData = await data.json();
      setSuggestions(jsonData[1]);

      //add to cache
      const obj = {};
      obj[searchQuery] = jsonData[1];
      dispatch(
        addToCache({
          [searchQuery]: jsonData[1],
        })
      );
    }
  };

  if (searchQuery !== "" && !suggestions) return null;

  // console.log(suggestions);

  if (!suggestions) return null;

  return (
    <div className="relative">
      <form
        className="font-medium mx-2 p-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        
        onFocus={()=>setMenuOpen(true)}
      >
        
          <div className="flex h-10 mt-2 pt-[2px] pr-20 ">
            <input
              type="text"
              placeholder="Search..."
              className="w-[550px] border rounded-s-full px-7 shadow-lg dark:bg-zinc-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              
            />

            {(!searchQuery)?  
                <Link to={`/results?search_query=${searchQuery}`}>
                  <img
                    className="h-[39px] py-2 px-5 border rounded-e-full hover:bg-gray-200 shadow-lg bg-gray-100 dark:bg-zinc-700"
                    alt="search"
                    src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
                  />
                </Link>:
                <img
                className="h-[39px] py-2 px-5 border rounded-e-full hover:bg-gray-200 shadow-lg bg-gray-100 dark:bg-zinc-700"
                alt="close"
                src="https://static-00.iconduck.com/assets.00/close-icon-1024x1024-lamxribk.png"
                onClick={(e) => setSearchQuery('')}
                />
            }
          </div>
       
        {menuOpen &&  (
          <div className="z-[9] absolute bg-white w-[550px] border rounded-lg shadow-lg  font-semibold mx-1 my-[2px]">
            {suggestions.map((suggestion) => {
              return (
                <ResultsSuggestionContainer
                  suggestion={suggestion}
                  setSearchQuery = {setSearchQuery}
                  key={suggestion}
                />
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
