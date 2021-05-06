import { ISearchAction, SearchActionTypes } from "../../types/search";

export const cleanSearch = ()=>{
    return {type: SearchActionTypes.SEARCH_CLEAN}
}

export const updateSearch = (name="")=>{
    return {type: SearchActionTypes.SEARCH_UPDATE, payload: name}
}