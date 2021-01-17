import React, { Component } from 'react';

export class Contact extends Component {
    constructor(){
        super()
        this.state={
            userid:"",
            passwd:"",
        };
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(e){
        e.preventDefault();
        const {x,y} = this.refs;
        console.log(x)
        console.log(y)
        this.setState(
            {
                userid: x.value,
                passwd: y.value,
            }
        )
    }
    render() {
        return (
            <div>
                 <form onSubmit={this.handleEvent}>
                아이디
                <input
                type="text"
                ref="x"/>
                <br/>
                비밀번호
                <input
                type="text"
                ref="y"/>
                <br/>
                <button>로그인</button>
                </form>
                아이디:{this.state.userid}
                <br/>
                비번:{this.state.passwd}
                <br/>
            </div>
        );
    }
}
