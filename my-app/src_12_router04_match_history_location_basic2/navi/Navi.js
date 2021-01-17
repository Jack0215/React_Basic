import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
class Navi extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>Home</NavLink>&nbsp;&nbsp;
                <NavLink to='/login'>login</NavLink>&nbsp;&nbsp;
                <NavLink to='/member/홍길동?xxx=100'>member</NavLink>&nbsp;&nbsp;
                <NavLink to='/myPage'>myPage</NavLink>&nbsp;&nbsp;
            </div>
        );
    }
}

export default Navi;