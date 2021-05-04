import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UserCard = ({ data, settingData }) => {
  return (
    <div className="usercard">
      <img
        src={data.avatar_url}
        alt="Ошибка загрузки аватара"
        className="avatar"
      />
      <h1 className="login">{data.login}</h1>
      <h3>{data.public_repos} repositories</h3>
      <h3>{data.followers} followers</h3>
      <h3>{data.following} following</h3>
      <div>Created at {data.created_at}</div>
      <div>Updated at {data.updated_at}</div>
    </div>
  );
};

export default function User(props) {
  useEffect(() => {
    fetch("https://api.github.com/users/" + props.name)
      .then((result) => result.json())
      .then((res) => {
        if (res.message) {
          props.setError(true);
        } else {
          props.setError(false);
          props.settingData(res);
        }
      });
  }, []);
  if (!props.error)
    return (
      <div className="content">
        {props.data.avatar_url !== "undefined" ? (
          <UserCard data={props.data} settingData={props.settingData} />
        ) : (
          <div />
        )}
        <Link to="/">
          <button className="button">Главная</button>
        </Link>
      </div>
    );
  return (
    <div className="content">
      <div className="error">Пользователь не найден</div>
      <Link to="/">
        <button className="button">Главная</button>
      </Link>
    </div>
  );
}
