import {useState} from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wantCook, setWantCook] = useState([]);
  const [currentCook, setCurrentCook] = useState([]);

  const handleAddWantCook = (data) => {
    if (wantCook.includes(data)) {
      return toast.error(
        `You have already added ${data.recipe_name} in Want to cook list!`
      );
    }
    toast.success(`Added ${data.recipe_name} in Want to cook list!`);
    const newWantCook = [...wantCook, data];
    setWantCook(newWantCook);
  };
  const handleAddCurrentCook = (data) => {
    toast.success(`Added ${data.recipe_name} in Currently cooking list!`);
    const newWantCook = wantCook.filter(
      (obj) => obj.recipe_id !== data.recipe_id
    );
    setWantCook(newWantCook);
    const newCurrentCook = [...currentCook, data];
    setCurrentCook(newCurrentCook);
  };
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ToastContainer />
      <div className="container px-6 mx-auto mt-10 lg:px-24">
        <div className="px-4 my-6 text-center md:px-20 lg:px-28">
          <h1 className="font-semibold text-4xl text-[#150B2B] ">
            Our Recipes
          </h1>
          <p className="text-[#150B2B99]">
            Discover an array of tantalizing recipes curated just for you. From
            savory mains to delectable desserts, explore our culinary treasures.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <Recipes handleAddWantCook={handleAddWantCook}></Recipes>
          <Sidebar
            wantCook={wantCook}
            currentCook={currentCook}
            handleAddCurrentCook={handleAddCurrentCook}
          ></Sidebar>
        </div>
      </div>
    </>
  );
}

export default App;
