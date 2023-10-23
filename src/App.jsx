import FavouritePage from "./components/FavouritePage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleRecipePage from "./components/SingleRecipePage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<SingleRecipePage />} />
          <Route path="/favourites" element={<FavouritePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
