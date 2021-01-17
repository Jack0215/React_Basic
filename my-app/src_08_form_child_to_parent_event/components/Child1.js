import React, { Component } from 'react';

export class Child1 extends Component {
    mesg;
    constructor(){
        super()
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
        console.log("Child.handleEvent");
    }
    render() {
        this.mesg=this.props.mesg;
        return (
            <div>
                <h1>CHild component</h1>
                <h1>{this.mesg}</h1>
                <button onClick={this.handleEvent}>OK</button>
            </div>
        );
    }
}
