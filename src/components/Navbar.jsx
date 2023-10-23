import { GiSpellBook } from "react-icons/gi";
import { FcBookmark } from "react-icons/fc";
import { BiSearchAlt } from "react-icons/bi";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContextProvider";
import FavouritePage from "./FavouritePage";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const { search, handleSearch } = useContext(SearchContext);
  const [showBookMark, setShowBookMark] = useState(false);

  return (
    <div className="max-w-full ">
      <div className="bg-gray-500 flex  justify-between items-center p-4 relative">
        <div>
          <GiSpellBook className="h-10 w-10" />
        </div>
        <div className="bg-gray-300 w-[50%] rounded-md">
          <label className="flex justify-center items-center p-3">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search Recipe...."
              className="border-none bg-transparent focus:outline-none w-full"
            />
            <BiSearchAlt />
          </label>
        </div>
        <div
          className="flex justify-center items-center bg-gray-200 p-1 rounded-sm cursor-pointer hover:after:bg-black hover:after:text-white after:absolute after:top-[80%] after:right-[1%] after:p-1 hover:after:content-['Favourites❤️'] after:content-none after:rounded-sm "
          onClick={() => setShowBookMark(true)}
        >
          <FcBookmark className="h-6 w-6" />
        </div>
      </div>

      {showBookMark && (
        <div className="cursor-pointer">
          <h1 onClick={() => setShowBookMark(false)}>
            <AiFillCloseCircle className="h-10 w-10" />
          </h1>
          <FavouritePage />
        </div>
      )}
    </div>
  );
};

export default Navbar;
