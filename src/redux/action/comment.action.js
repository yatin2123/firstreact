import { useEffect } from "react";
import { ADD_COMMENT, GET_COMMENT } from "../ActionType"

export const getData =  async () => {
    const  response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const  data = await response.json()
    console.log(data);

    // return data;
}






export const addcommentData = (data) => (dispatche) => {
    console.log(data);

   getData(data)
   .then((response) => dispatche({type: ADD_COMMENT, paylod: response.data}))


}

export const getcommentData = () => (dispatche) => {
    getData()
    .then((response) => dispatche({type: GET_COMMENT, paylod: response.data}))
}

