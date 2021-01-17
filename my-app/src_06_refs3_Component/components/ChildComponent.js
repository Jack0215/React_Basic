import React, { Component } from 'react';

export class ChildComponent extends Component {
    info(){
        console.log("ChildComponent info( ) 함수");
    }
    render() {
        return (
            <div>
                ChildComponent
            </div>
        );
    }
}
