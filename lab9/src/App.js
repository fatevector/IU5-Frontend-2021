import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

import User from "./components/User";
function App() {
  const [data, setData] = useState({
    avatar_url: "",
    login: "",
    followers: "",
    following: "",
    created_at: "",
    updated_at: "",
    public_repos: ""
  });
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  function onChange(e) {
    setName(e.target.value);
  }
  function settingData(info) {
    setData({
      avatar_url: info.avatar_url,
      login: info.login,
      followers: info.followers,
      following: info.following,
      created_at: info.created_at,
      updated_at: info.updated_at,
      public_repos: info.public_repos
    });
  }
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User
            name={name}
            data={data}
            setData={setData}
            error={error}
            setError={setError}
            settingData={settingData}
          />
        </Route>
        <Route path="/">
          <Home name={name} onChange={onChange} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
