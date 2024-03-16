import {useEffect, useState} from "react";
import Card from "./Card";

export default function Recipes({handleAddWantCook}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data.map((dat) => (
          <Card
            handleAddWantCook={handleAddWantCook}
            key={dat.recipe_id}
            recipeData={dat}
          ></Card>
        ))}
      </div>
    </>
  );
}
