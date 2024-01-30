import "./App.css";
import Banner from "./Components/Banner/Banner";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import GetToKnow from "./Components/GetToKnow/GetToKnow";

import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <GetToKnow />
      <Footer />
    </div>
  );
};

export default App;
