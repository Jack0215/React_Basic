import React, { Component } from 'react';

export class ChildComponent extends Component {
    
    render() {
        let {mesg, mesg2} = this.props;
        return (
            <div>
                <h3>클래스 컴포넌트(Class Component)</h3>
                props:{mesg}<br/>
                props2:{mesg2};
                {/* props:{mesg}<br/> */}
            </div>
        ); 
    }
} 