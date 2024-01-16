import { useEffect } from "react";
import { ADD_COMMENT, DELETE_COMMENT, ERROR_COMMENT, GET_COMMENT, LODING_COMMENT } from "../ActionType"


const lodingcomment = () => (dispatch) => {
    dispatch({ type: LODING_COMMENT })

}

const errorcomment = (error) => (dispatch) => {
    dispatch({type: ERROR_COMMENT, payload: error})
}

export const getData = () => async (dispatch) => {
    dispatch(lodingcomment())

    setTimeout(async () => {
        try {
        console.log('yyyyyyyyyy');
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json()
        // console.log(data);

        dispatch({ type: GET_COMMENT, payload: data })
        } catch(error){
            dispatch(errorcomment(error))
        }
    }, 2000)

}

export const addData = (data) => async (dispatch) => {
    console.log(data);
    try {
        dispatch({ type: ADD_COMMENT, payload: data })
    } catch (rejected) {
        console.log(rejected);
    }
}

export const deleteData = (id) => (dispatch) => {
        dispatch({type: DELETE_COMMENT, payload: id})
}









