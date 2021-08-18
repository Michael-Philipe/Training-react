import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";


const Routes = () => {
  
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/services">
        <Services/>
      </Route>
      <Route exact path="/products">
        <Products/>
      </Route>
      <Route exact path="/sign-up">
        <SignUp/>
      </Route>
    </Switch>
  );
};

export default Routes;
