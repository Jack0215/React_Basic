import React, { Component } from 'react';
import {Second}  from './Second';

export class First extends Component {
    render() {
        return (
            <div>
                <Second {...this.props}/>
            </div>
        );
    }
}