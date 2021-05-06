import User from "./components/User";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={User} path="/user"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
