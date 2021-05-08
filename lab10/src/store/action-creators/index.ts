import * as UserActionCreators from "./user"
import * as SearchActionCreators from "./search"

export default{
    ...UserActionCreators,
    ...SearchActionCreators
}