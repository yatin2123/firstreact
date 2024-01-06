import React, { useEffect } from 'react';
import { addcommentData, getData, getcommentData } from '../redux/action/comment.action';
import { useDispatch, useSelector } from 'react-redux';

function Comment(props) {


    const Data = useSelector(state => state.comment)
    console.log(Data);

    // const dispatch = useDispatch()

    useEffect(() => {
        //    getcommentData();
        // addcommentData()
        getData()
    }, [])


    return (
        <div>
            
        </div>
    );
}

export default Comment;