import React, { Component } from 'react';

export class Contact extends Component {
    constructor(){
        super()
        this.state={
            userid:"",
            passwd:""
        }

    }
    handleChange =(e)=>{
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }
    handleEvent=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEvent}>
                아이디
                <input
                type="text"
                value={this.state.userid}
                name="userid"
                onChange={this.handleChange}/>
                <br/>
                비밀번호
                <input
                type="text"
                value={this.state.passwd}
                name="passwd"
                onChange={this.handleChange}/>
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
