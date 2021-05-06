import { useHistory } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Home: React.FC = () => {
  const { search } = useTypedSelector((state) => state.search);
  const { updateSearch } = useActions();
  const history = useHistory();
  return (
    <div className="content">
      <div className="search-form">
        <h2>Поиск пользователя</h2>
        <div className="input-form">
          <input
            className="input"
            type="text"
            placeholder="  Имя пользователя"
            onChange={(e) => updateSearch(e.target.value)}
            onKeyPress={(event) => {
              if (event.code.toLowerCase() === "enter") {
                if (search !== "") {
                  history.push("/user");
                }
              }
            }}
          />
          <button
            className="button"
            onClick={() => {
              if (search !== "") {
                history.push("/user");
              }
            }}
          >Поиск</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
