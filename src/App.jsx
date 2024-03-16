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
      <div className="container flex flex-col gap-4 px-6 mx-auto my-6 lg:flex-row lg:px-24">
        <Recipes handleAddWantCook={handleAddWantCook}></Recipes>
        <Sidebar
          wantCook={wantCook}
          currentCook={currentCook}
          handleAddCurrentCook={handleAddCurrentCook}
        ></Sidebar>
      </div>
    </>
  );
}

export default App;
