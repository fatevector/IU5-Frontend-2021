import {ISearchState, ISearchAction, SearchActionTypes} from "../../types/search"
const initialState: ISearchState = {
  search:""
};

export const searchReducer = (
  state = initialState,
  action: ISearchAction
): ISearchState => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_CLEAN:
      return { search: "" };
    case SearchActionTypes.SEARCH_UPDATE:
      return { search: action.payload };
    default:
      return state;
  }
};