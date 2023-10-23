import axios from "axios";
import { useEffect, useState } from "react";

const FavouriteCard = ({ recipe }) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${recipe}?type=public&app_id=6488523b&app_key=3ab038238ef7212709d810ee61088424`
      )
      .then((response) => {
        setData(response.data);
        console.table(response.data);
      })
      .catch((err) => console.log(err));
  }, [recipe]);

  return (
    <div className="border p-4 rounded-md flex items-center gap-6 bg-gray-200 m-6">
      <div>
        <img
          src={data?.recipe?.image}
          alt="das"
          className="object-cover  w-20 h-20 rounded-sm"
        />
      </div>
      <div>
        <h1 className=" text-gray-600 lg:text-base text-sm mt-2">
          <span className="text-black lg:text-base text-sm font-bold">
            Label :{" "}
          </span>
          {data?.recipe?.label}
        </h1>

        <h2 className="mt-1">
          <span className="text-black text-sm font-semibold ">
            Cuisine Type :{" "}
          </span>
          {data?.recipe?.cuisineType}
        </h2>

        <h2 className="mt-2">
          <span className="text-black text-sm font-semibold ">Source : </span>
          <span className="p-[3px] text-sm border bg-gray-300 rounded-md">
            {data?.recipe?.source}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default FavouriteCard;
