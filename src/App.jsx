import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
