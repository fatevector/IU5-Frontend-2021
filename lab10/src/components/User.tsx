import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const User: React.FC = () => {
  const { data, error, loading } = useTypedSelector((state) => state.user);
  const { search } = useTypedSelector((state) => state.search);
  const { fetchData, cleanSearch } = useActions();
  
  useEffect(() => {
    fetchData(search);
  }, []);

  if (loading) {
    return (
      <div className="content">
        <div className="loading">Идет загрузка...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="content">
        <div className="error">Пользователь не найден</div>
        <Link to="/">
          <button className="button" onClick={cleanSearch}>Главная</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="content">
      {data !== null ? (
        <div className="usercard">
        <img
          src={data!.avatar_url}
          alt="Ошибка загрузки аватара"
          className="avatar"
        />
        <h1 className="login">{data!.login}</h1>
        <h3>{data!.public_repos} repositories</h3>
        <h3>{data!.followers} followers</h3>
        <h3>{data!.following} following</h3>
        <div>Created at {data!.updated_at}</div>
      </div>
      ) : (
        <div />
      )}
      
      <Link to="/">
        <button className="button" onClick={cleanSearch}>Главная</button>
      </Link>
    </div>
  );
};

export default User;
