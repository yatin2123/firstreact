import { ADD_COMMENT, GET_COMMENT } from "../ActionType";


const initialState = {
    comment: [],
}

export const commentReducer = (state =initialState, action ) => {
    console.log(action);

    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
                comment : action.payload
            }

        case ADD_COMMENT:
            return{
                ...state,
                comment: state.comment.concat(action.payload)
            }
            
        default:
           return state;
    }

}