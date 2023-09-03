import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headphones from './Products/Headphones/Headphones';
import Mobile from './Products/MobilePhone/Mobile';
import Laptop from './Products/LaptopPage/Laptop';
import Home from './Home/Home';
// import ProductMain from './Products/ProductMain';
// import Evaluate from './Evaluation/Evaluate';

// import Greeter from './Greeter/Greeter';



function App() {
  return (
    <div className="App">
      {/* <Mobile/> */}

      <Routes>

      <Route path="/" element = {<Home/>} />
      <Route path="/mobile" element = {<Mobile/>} />
      <Route path="/laptop" element = {<Laptop/>} />
      <Route path="/headphones" element = {<Headphones/>} />
        
      </Routes>
    </div>
  );
}

export default App;
