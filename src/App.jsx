import {useState} from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wantCook, setWantCook] = useState([]);

  const handleAddWantCook = (data) => {
    if (wantCook.includes(data))
      return toast(`You have already added ${data.recipe_name}!`);
    const newWantCook = [...wantCook, data];
    setWantCook(newWantCook);
  };
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ToastContainer />
      <div className="container flex flex-col gap-4 px-6 mx-auto my-6 lg:flex-row lg:px-24">
        <div className="">
          <Recipes handleAddWantCook={handleAddWantCook}></Recipes>
        </div>
        <div className="">
          <Sidebar wantCook={wantCook}></Sidebar>
        </div>
      </div>
    </>
  );
}

export default App;
