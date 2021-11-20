import {NavBar} from "./Component/NavBar"
import {Home} from "./Component/Home"
import { Route,Switch } from 'react-router-dom';
import {CartItem} from "./Component/cartItem"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/cart"><CartItem/></Route>
      </Switch>
    </div>
  );
}

export default App;
