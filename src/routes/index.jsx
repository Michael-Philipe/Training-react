import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";


const Routes = () => {
  
  return (
    <Switch>
      <Route exact path="/">
        <Navbar/>
      </Route>
    </Switch>
  );
};

export default Routes;
