import clockIcon from "/Clock-icon.svg";
import calorieIcon from "/Calorie-icon.svg";
import PropTypes from "prop-types";

Card.propTypes = {
  recipeData: PropTypes.object,
  handleAddWantCook: PropTypes.func,
};

export default function Card({recipeData, handleAddWantCook}) {
  const {
    recipe_name,
    recipe_image,
    short_description,
    preparing_time,
    ingredients,
    calories,
  } = recipeData;

  return (
    <>
      <div className="card w-full bg-white rounded-2xl border border-[#12132D26] p-4 animate-fade-down animate-once">
        <figure className="">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="my-4 space-y-2">
          <h2 className="text-xl font-semibold text-[#282828]">
            {recipe_name}
          </h2>
          <p className="text-[#878787]">{short_description}</p>
        </div>
        <hr className="bg-[#282828] opacity-10"></hr>
        <div className="mt-4 mb-2">
          <h3 className="text-lg font-medium text-[#282828]">
            Ingredients: {ingredients.length}
          </h3>
          <ol className="text-[#878787] list-disc px-4 my-4">
            {ingredients.map((ing) => (
              <li key={Math.random() * 6969}>{ing}</li>
            ))}
          </ol>
        </div>
        <hr className="bg-[#282828] opacity-10"></hr>
        <div className="flex gap-2 my-4">
          <h4 className="text-[#282828CC] flex gap-1">
            <img src={clockIcon} alt="Clock Icon" /> {preparing_time}
          </h4>
          <h4 className="text-[#282828CC] flex gap-1">
            <img src={calorieIcon} alt="Clock Icon" /> {calories}
          </h4>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleAddWantCook(recipeData)}
            className="border-customPrimary btn bg-customPrimary rounded-3xl px-6 text-[#150B2B] font-semibold "
          >
            Want to Cook
          </button>
        </div>
      </div>
    </>
  );
}
