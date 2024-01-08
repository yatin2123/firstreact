import { useEffect } from "react";
import { ADD_COMMENT, GET_COMMENT } from "../ActionType"

export const getData =  () =>  async (dispatch) => {
    try{
        console.log('yyyyyyyyyy');
        const  response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const  data = await response.json()
        // console.log(data);

        dispatch({type: GET_COMMENT, payload: data})

        
    } catch(e){
        console.log(e);
    }
   
}

export const addData =  (data) =>  async (dispatch) => {
    console.log(data);
    try{
      

      dispatch({type: ADD_COMMENT, payload: data})

        
    } catch(rejected ){
        console.log(rejected );
    }
   
}
 
 







