export enum SearchActionTypes {
  SEARCH_CLEAN = "SEARCH_CLEAN",
  SEARCH_UPDATE = "SEARCH_UPDATE",
}

export interface ISearchState {
  search: string;
}
interface IClearSearchAction {
  type: SearchActionTypes.SEARCH_CLEAN;
}
interface IUpdateSearchAction {
  type: SearchActionTypes.SEARCH_UPDATE;
  payload: string;
}

export type ISearchAction = IClearSearchAction | IUpdateSearchAction;
