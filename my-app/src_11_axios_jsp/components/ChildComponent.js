import React, { Component } from 'react';

export class ChildComponent extends Component {
    render() {
        return (
            <div>
                <h1>클래스 컴포넌트</h1>
                props:{this.props.mesg}<br/>
                props:{mesg}<br/>
            </div>
        ); 
    }
}