import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        {<Home />}
      </Route>
      <Route path ='/checkout'>
        {<Checkout />}
      </Route>
    </Switch>
  );
}

export default App;
