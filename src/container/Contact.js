import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, useLocation } from 'react-router-dom';
import Student from './Student';
import Employe from './Employe';


function Contact() {
    const location = useLocation(); 
    console.log(location);
    return (
        <div>
            Contact Page {location.state.name}
            <Routes>
                <Route path="/employe" element={<Employe />} />
                <Route path="/student" element={<Student />} />
            </Routes>
           
        </div>
    )
}

export default Contact;