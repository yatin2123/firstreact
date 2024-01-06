import { applyMiddleware, createStore } from "redux"
import { rooteReduce } from "./reducer"
import thunk from "redux-thunk"


export const configuration = () => {
        let store = createStore(rooteReduce, applyMiddleware(thunk))

        return store
}