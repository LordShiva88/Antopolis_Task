import './App.css'
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Category/>
    </div>
  );
};

export default App;