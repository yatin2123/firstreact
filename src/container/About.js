import React, { Component } from 'react';

import { useNavigate } from 'react-router-dom';

function About(){
    const navigat = useNavigate()
    return(
        <div>
            About Page
            <button onClick={() => navigat('/contact',{state: {name: 'yatin'}})}>Move to contact</button>
        </div>
    )
}


export default About;