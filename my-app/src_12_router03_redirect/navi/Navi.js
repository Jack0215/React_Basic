import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
class Navi extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>Home</NavLink>&nbsp;&nbsp;
                <NavLink to='/login'>login</NavLink>&nbsp;&nbsp;
                <NavLink to='/member'>member</NavLink>
            </div>
        );
    }
}

export default Navi;