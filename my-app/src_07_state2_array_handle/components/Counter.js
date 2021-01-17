import React, { Component } from 'react';

export class Counter extends Component {
    constructor(){
        super();
        this.state ={
            contactData: [
                { name: "Allen", phone: "000-000-0001" },
                { name: "Bob", phone: "000-000-0022" },
                { name: "Charlie", phone: "000-000-0333" },
                { name: "David", phone: "000-000-444" },
              ],
        };
        this.handle = this.handle.bind(this);
    }//end constructor

    handle(){
        let xxx = this.state.contactData;
        xxx.push({name:"David", phone:"000-000-0000"});
        this.setState(
            {
                contactData:xxx
            }
        )
    }
    render() {
        return (
            <div>
                {this.state.contactData.map(function(row,idx){
                    return (
                        <div key={idx}>
                            {row.name}:{row.phone}
                        </div>
                );
                })}
                <button onClick={this.handle}>사용자 추가</button>
            </div>
        );
    }
}
