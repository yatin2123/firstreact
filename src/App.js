import City from "./container/City";
import Country from "./container/Country";
import Count from "./container/Count";
import CountryFun from "./container/CountryFun";
import CountFun from "./container/CountFun";
import Medicines from "./container/Medicines";
import Life_cy1 from "./container/Life_cy1";
import Lifi_cy from "./container/Lifi_cy";
import Timer from "./container/Timer";
import TimerFun from "./container/TimerFun";
import Quotes from "./container/Quotes";
import Product from "./container/Product";
import Product_cat from "./container/Product_cat";
// import { Navbar } from "reactstrap";
import Navbar from "./container/Navbar";
import About from "./container/About";
import Home from "./container/Home";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Contact from "./container/Contact";
import Test from "./container/Test";


function App() {
  return (
    <div className="App">
      {/* <About/> */}
      {/* <Home/> */}
      {/* <Life_cy1/>  */}
      {/* <Lifi_cy/> */}
      {/* <CountryFun/> */}
     {/* <CountFun/> */}
     {/* <Medicines/> */}
      {/* <Country/> */}

      {/* <City/> */}

      {/* <Count/> */}
      {/* <Timer/> */}
      {/* <TimerFun/> */}
      {/* <Quotes/> */}
      {/* <Product/> */}
      {/* <Product_cat/> */}

      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Contact/> */}
      {/* <Main>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </Main> */}
      <Test/>
    </div>
  );
}

export default App;
