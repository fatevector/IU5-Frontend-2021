import { IUserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";

export const fetchData = (name:string) => {
  return (dispatch: Dispatch<IUserAction>) => {
    dispatch({ type: UserActionTypes.FETCH_USER });
    const response = fetch(`https://api.github.com/users/${name}`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          let error = new Error(res.statusText);
          throw error;
        }
      })
      .then((result) => result.json())
      .then((data) => {
        dispatch({
          type: UserActionTypes.FETCH_USER_SUCCESS,
          payload: data
        });
      })
      .catch((err) =>
        dispatch({
          type: UserActionTypes.FETCH_USER_ERROR,
          payload: "Произошла ошибка при загрузке пользователя",
        })
      );
  };
};
