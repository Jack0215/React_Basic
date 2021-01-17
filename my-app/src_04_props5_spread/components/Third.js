import React, { Component } from 'react';

export class Third extends Component {
    render() {
        return (
            <div>
                {this.props.id}
                {this.props.pw}
            </div>
        );
    }
}