import React, { Component } from 'react';
import {Third} from './Third';
export class Second extends Component {
    render() {
        return (
            <div>
                <Third {...this.props}/>
            </div>
        );
    }
} 
