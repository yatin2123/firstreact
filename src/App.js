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
import { Provider } from "react-redux";
import { configuration } from "./redux/store";
import Counter from "./container/Counter";
import Example from "./container/Example";
import Comment from "./container/Comment";


function App() {

  let store = configuration()
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      {/* <Example/> */}
      <Comment/>
    </Provider>
  );
}

export default App;
