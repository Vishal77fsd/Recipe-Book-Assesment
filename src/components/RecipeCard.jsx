import { useContext, useState } from "react";
import { BsBookmarkDash, BsBookmarkPlus } from "react-icons/bs";
import { SearchContext } from "../context/SearchContextProvider";
import SingleRecipePage from "./SingleRecipePage";
import { AiFillCloseCircle } from "react-icons/ai";

const RecipeCard = ({ recipe }) => {
  const [openSinglePage, setOpenSinglePage] = useState(false);
  let isBookMark = false;

  const bookMark = JSON.parse(localStorage.getItem("recipe"));
  isBookMark = bookMark?.includes(recipe?.url);

  const { handleAdd } = useContext(SearchContext);

  return (
    <div className="">
      {openSinglePage === true && (
        <div className="cursor-pointer absolute top-0 border right-0 bg-gray-400 z-10 ">
          <h1 onClick={() => setOpenSinglePage(false)}>
            <AiFillCloseCircle className="h-10 w-10" />
          </h1>
          <SingleRecipePage id={recipe?.uri.split("#")[1]} />
        </div>
      )}
      {!openSinglePage && (
        <div className="border p-2 lg:h-[500px] md:h-[500px] bg-white">
          <div
            className="absolute bg-gray-700 p-1 m-2 rounded-sm cursor-pointer"
            onClick={handleAdd}
          >
            {isBookMark === true ? (
              <BsBookmarkPlus
                className="text-white"
                data-uri={`${recipe?.uri}`}
              />
            ) : (
              <BsBookmarkPlus
                className="text-white"
                data-uri={`${recipe?.uri}`}
              />
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setOpenSinglePage(true)}
          >
            <img
              src={recipe?.image}
              alt="das"
              className="object-cover w-full sm:h-40 md:h-60 lg:h-72 rounded-sm"
            />
          </div>
          <h1 className=" text-gray-600 lg:text-base text-sm mt-2">
            <span className="text-black lg:text-base text-sm font-bold">
              Label :{" "}
            </span>
            {recipe?.label}
          </h1>

          <h2 className="mt-1">
            <span className="text-black text-sm font-semibold ">
              Cuisine Type :{" "}
            </span>
            {recipe?.cuisineType}
          </h2>

          <h2 className="mt-1">
            <span className="text-black text-sm font-semibold ">
              Dish Type :{" "}
            </span>
            {recipe?.dishType}
          </h2>

          <h2 className="mt-2">
            <span className="text-black text-sm font-semibold ">Source : </span>
            <span className="p-[3px] text-sm border bg-gray-300 rounded-md">
              {recipe?.source}
            </span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
