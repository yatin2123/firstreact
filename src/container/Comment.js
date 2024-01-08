import React, { useEffect } from 'react';
import { addData, addcommentData, getData, getcommentData } from '../redux/action/comment.action';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Comment(props) {


    const comment = useSelector(state => state.comment)
    // console.log(comment);

    const dispatch = useDispatch()

    useEffect(() => {
        getcommentData()

    }, []);

    const getcommentData = async () => {
        await dispatch(getData())
    }

    const handlesubmit = () => {
        console.log('yyyyyyyyyyyyyyyyy');
        dispatch(addData())
    }

    let Commentschema = yup.object().shape({
        name: yup.string().required("Please Enter Name")
    })


    const formik = useFormik({
        initialValues: {
            name: ''
        },

        validationSchema: Commentschema,
        onSubmit: values => {
            console.log(values);
            dispatch(addData(values))
        },
    });

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input name='name' type='text' onChange={handleChange} onBlur={handleBlur} value={values.name} />
                <span>{errors.name && touched.name ? errors.name : null}</span>


                <button type="submit">Submit</button>
            </form>

            {

                comment.comment && comment.comment.map((v) => {
                    // console.log(v);

                    return (

                        <h2>{v.name}</h2>
                    )
                })
            }


        </div>
    );
}

export default Comment;