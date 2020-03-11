import React from 'react';
import './App.css';
import Cart from "./components/cart";
import Billing from "./components/billing";
import Order from "./components/order";


import { Provider } from "react-redux";
import store from "./store/store";
import Nav from "./components/navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Provider store={store}> 
        <Router>
        {/* <Nav/> */}

        <Switch>
          <Route exact path="/">
            <Cart />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/billing">
            <Billing />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
