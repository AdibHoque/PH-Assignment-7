import {useEffect, useState} from "react";
import Card from "./Card";

export default function Recipes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }),
    [];
  return (
    <>
      <div className="grid grid-cols-3">
        {data.map((dat) => (
          <Card key={dat.recipe_id} recipeData={dat}></Card>
        ))}
      </div>
    </>
  );
}
