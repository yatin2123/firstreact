import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About US</Link>
                <Link to='/contact'>Contact</Link>
                {/* <h2>ie fff jwnd </h2> */}
            </div>
        );
    }
}

Navbar.propTypes = {

};

export default Navbar;