import logo from './logo.svg';
import './App.css';
import Slideshow from './Components/SlideShow';
import {Navbar} from "./Components/Navbar"
import {Image} from "./Components/Image"
import {Delivery} from "./Components/Delivery"
import{Card} from "./Components/Card"
import SlideShowAgain from "./Components/slideShowAgain"
import { Route,Switch } from 'react-router-dom';
import Main from './Components/Main';
import { Men } from './Components/Men';
import { Sale } from './Components/Sale';
import { MoreDetail } from './Components/MoreDetails';
import { Cart } from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Switch>
            <Route exact path="/"><Main/></Route>
            <Route exact path="/men"><Men/></Route>
            <Route exact path="/fashion"><Sale/></Route>
            <Route path="/cart"><Cart/></Route>
            <Route path="/men/fashion/moredetail/:id"><MoreDetail/></Route>
      </Switch>
    </div>
  );
}

export default App;
