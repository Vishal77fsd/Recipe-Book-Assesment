import { createContext, useState } from "react";

export const SearchContext = createContext("");

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  let bookmark = [];

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleAdd(e) {
    const id = e.target?.dataset?.uri?.split("#");

    if (id.length > 1 && id[1] !== undefined) {
      if (localStorage.getItem("recipe") === null) {
        bookmark.push(id[1]);
        localStorage.setItem("recipe", JSON.stringify(bookmark));
      } else {
        bookmark = JSON.parse(localStorage.getItem("recipe"));

        if (bookmark.includes(id[1])) {
          bookmark = bookmark.filter((oldId) => oldId !== id[1]);
          localStorage.setItem("recipe", JSON.stringify(bookmark));
        } else {
          bookmark.push(id[1]);
          localStorage.setItem("recipe", JSON.stringify(bookmark));
        }
      }
    }
  }

  return (
    <SearchContext.Provider value={{ search, handleSearch, handleAdd }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
