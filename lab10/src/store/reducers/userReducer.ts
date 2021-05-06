import {IUserState, IUserAction, UserActionTypes} from "../../types/user"
const initialState: IUserState = {
  data: null,
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: IUserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { loading: true, error: null, data: null };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { loading: false, error: null, data: {
        ...state.data,
        avatar_url: action.payload.avatar_url,
        login: action.payload.login,
        followers: action.payload.followers.toString(),
        following: action.payload.following.toString(),
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
        public_repos: action.payload.public_repos.toString(),
      }};
    case UserActionTypes.FETCH_USER_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};
