import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
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
  // function MakeRequest(text) {
  //   console.log("Creating a request: " + text);
  //   fetch('https://api.github.com/users/' + text)
  //   .then((result) => result.json())
  //   .then((data) => {
  //     if (data.message) {
  //       setError(true);
  //     } else {
  //       setError(false);
  //       setData(data);
  //     }
  //     console.log(data);
  //   })
  //   .catch(() => {
  //     setError(true);
  //   });
  // }
  // let git = "fatevector";
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${git}`)
  //     .then((result) => result.json())
  //     .then((res) => {
  //       console.log(res);
  //     });
  // });
  // const [value, setValue]=useState('initial');
  // const renderCount=useRef(1);
  // useEffect(()=>{
  //   renderCount.current++;
  // })
  return (
    // <div className="App">
    //   <header className="App-header">
    /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Количество рендеров: {renderCount.current}</h1>
        <input type="text" onChange={e=>setValue(e.target.value)} value={value}/>     
      </header>
    </div> */
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
