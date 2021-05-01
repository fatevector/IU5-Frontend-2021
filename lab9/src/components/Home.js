import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Home({ name, onChange }) {
  const [flag, setFlag] = useState(false);
  let history = useHistory();
  if (flag) history.push("/user");

  return (
    <div className="content">
      <div className="search-form">
        <h2>Поиск пользователя</h2>
        <div className="input-form">
          <input
            className="input"
            type="text"
            placeholder="  Имя пользователя"
            onChange={(e) => onChange(e)}
            onKeyPress={(event) => {
              if (event.code.toLowerCase() === "enter") {
                setFlag(true);
              }
            }}
            value={name}
          />
          <Link to="/user">
            <button className="button">Поиск</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
