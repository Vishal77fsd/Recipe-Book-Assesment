import { BiBowlHot } from "react-icons/bi";
import FavouriteCard from "./FavouriteCard";

const FavouritePage = () => {
  const bookMark = JSON.parse(localStorage.getItem("recipe"));

  return (
    <div className="w-[90%] m-auto mt-10">
      {bookMark === null && (
        <div className="h-[50vh] font-sans text-2xl flex justify-center items-center">
          Add Some <BiBowlHot className="m-2 text-2xl" /> Recipes To See Here
        </div>
      )}

      <div className="">
        {bookMark !== undefined &&
          bookMark?.map((recipe, index) => (
            <div key={index}>
              <FavouriteCard recipe={recipe} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FavouritePage;
