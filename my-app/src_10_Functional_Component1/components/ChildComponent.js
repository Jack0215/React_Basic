import React, { Component } from 'react';

export class ChildComponent extends Component {
    
    render() {
        return (
            <div>
                <h3>클래스 컴포넌트(Class Component)</h3>
                props:{this.props.mesg}<br/>
                {/* props:{mesg}<br/> */}
            </div>
        ); 
    }
} 