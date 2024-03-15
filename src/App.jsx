import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container px-6 mx-auto lg:px-24">
        <Recipes></Recipes>
      </div>
    </>
  );
}

export default App;
