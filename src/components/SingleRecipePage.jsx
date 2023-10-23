import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleRecipePage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=6488523b&app_key=3ab038238ef7212709d810ee61088424`
      )
      .then((response) => {
        setData(response?.data?.recipe);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-[90%] border m-auto flex-col flex gap-5 sm:flex-row mt-4 rounded-md bg-gray-200 p-4">
      <div>
        <img
          src={data?.image}
          alt="das"
          className="object-cover lg:h-[500px] md:h-[500px] md:w-[100vw] lg:w-[100vw]"
        />
      </div>
      <div>
        <h1>Name : {data?.label}</h1>
        <h1>Calories : {data?.calories}</h1>
        <div className="mt-2 flex gap-4">
          Cautions :{" "}
          {data?.cautions.map((caution, index) => (
            <span className="p-1 bg-blue-200 rounded-md max-w-max" key={index}>
              {caution}
            </span>
          ))}
        </div>
        <div className="mt-2">
          Cuisine Type :{" "}
          {data?.cuisineType.map((type, index) => (
            <span className="p-1 bg-blue-200 rounded-md max-w-max" key={index}>
              {type}
            </span>
          ))}
        </div>
        <div className="mt-2 flex gap-2 flex-wrap items-center">
          Health Labels :{" "}
          {data?.healthLabels.map((health, index) => (
            <div className="p-1 bg-orange-200 rounded-md " key={index}>
              {health}
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2 flex-wrap items-center">
          Ingredient Lines :{" "}
          {data?.ingredientLines.map((line, index) => (
            <div className="p-1 bg-orange-300 rounded-md" key={index}>
              {line}
            </div>
          ))}
        </div>
        <div className="mt-2 ">
          Ingredients :{" "}
          {data?.ingredients.map((ingredient, index) => (
            <div className="p-1 bg-orange-300 rounded-md m-2" key={index}>
              <h1>Action : {ingredient?.text}</h1>
              <h1 className="first-letter:capitalize">
                {ingredient.foodCategory} : {ingredient?.food}
              </h1>
              {ingredient.measure !== "<unit>" && (
                <h1>Measure : {ingredient?.measure}</h1>
              )}
              <h1>Quantity : {ingredient?.quantity}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipePage;
