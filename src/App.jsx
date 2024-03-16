import {useState} from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";

function App() {
  const [wantCook, setWantCook] = useState([]);

  const handleAddWantCook = (data) => {
    console.log("test");
  };
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container flex flex-col gap-4 px-6 mx-auto my-6 lg:flex-row lg:px-24">
        <Recipes handleAddWantCook={handleAddWantCook}></Recipes>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export default App;
