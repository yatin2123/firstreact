import { ADD_COMMENT, DELETE_COMMENT, ERROR_COMMENT, GET_COMMENT, LODING_COMMENT } from "../ActionType";


const initialState = {
    isLoding: false,
    comment: [],
    error: null,
}

export const commentReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case LODING_COMMENT:
            return {
                isLoding: true,
                comment: [],
                error: null,
            }
        
        case ERROR_COMMENT:
            return{
                isLoding: false,
                comment: [],
                error: action.payload,
            }
        case GET_COMMENT:
            return {
                isLoding: false,
                comment: action.payload,
                error: null,
            }
        case ADD_COMMENT:
            return {
                ...state,
                comment: state.comment.concat(action.payload)
            }
        
        case DELETE_COMMENT:
            return {
                ...state,
                comment: state.comment.filter((v) => v.id !== action.payload)
            }

        default:
            return state;
    }

}