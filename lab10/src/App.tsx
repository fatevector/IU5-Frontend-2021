import User from "./components/User";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/lab10/build/"><Home/></Route>
          <Route path="/lab10/build/user"><User/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
