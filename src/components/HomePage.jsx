import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { SearchContext } from "../context/SearchContextProvider";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${
          search === "" ? "chicken" : search
        }&app_id=6488523b&app_key=3ab038238ef7212709d810ee61088424&random=true`
      )
      .then((response) => {
        setData(response.data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [search]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[20px] items-center content-center p-4 bg-gray-200">
      {data.length > 0 &&
        data.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
    </div>
  );
};

export default HomePage;
