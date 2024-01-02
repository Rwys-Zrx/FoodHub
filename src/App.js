import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import Home from "./Home/Home";
import Plats from "./Plats/Plats";
import Update from "./Recipes/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:categ" element={<Recipes />} />
        <Route exact path="/plats/:id" element={<Plats />} />
        <Route exact path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
