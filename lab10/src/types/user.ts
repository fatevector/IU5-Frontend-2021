export enum UserActionTypes {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

export interface IUserState {
  data: null | {
    avatar_url: string,
    login: string,
    followers: string,
    following: string,
    created_at: string,
    updated_at: string,
    public_repos: string
  };
  loading: boolean;
  error: null | string;
}
interface IFetchUserAction {
  type: UserActionTypes.FETCH_USER;
}
interface IFetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: any;
}
interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

export type IUserAction =
  | IFetchUserAction
  | IFetchUserSuccessAction
  | IFetchUserErrorAction;


