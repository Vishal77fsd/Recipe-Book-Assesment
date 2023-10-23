import { GiSpellBook } from "react-icons/gi";
import { FcBookmark } from "react-icons/fc";
import { BiSearchAlt } from "react-icons/bi";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { search, handleSearch } = useContext(SearchContext);

  return (
    <div className="max-w-full ">
      <div className="bg-gray-500 flex  justify-between items-center p-4 relative">
        <Link to={"/"}>
          <GiSpellBook className="h-10 w-10" />
        </Link>
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
        <Link
          to={"/favourites"}
          className="flex justify-center items-center bg-gray-200 p-1 rounded-sm cursor-pointer hover:after:bg-black hover:after:text-white after:absolute after:top-[80%] after:right-[1%] after:p-1 hover:after:content-['Favourites❤️'] after:content-none after:rounded-sm"
        >
          <FcBookmark className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
