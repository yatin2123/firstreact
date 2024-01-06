import { combineReducers } from "redux";
import { rooteReducer } from "./counter.reducer";
import { commentReducer } from "./comment.reducer";


export const rooteReduce = combineReducers({
    counter : rooteReducer,
    comment: commentReducer
})