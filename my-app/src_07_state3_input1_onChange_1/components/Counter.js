import React, { Component } from 'react';

export class Counter extends Component {
    constructor(){
        super()
        this.state ={
            userid:"",
            passwd:"",
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let nextState={}; //변경될 객체
        nextState[e.target.name]=e.target.value;
        //e.target.name은 userid의 값(key값)
        //{userid:'aaaa'}
        //{passwd:'1234'}
        console.log(e.target.name,"\t",e.target.value);
        this.setState(nextState);
    }

    handleEvent(e){
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
                    onChange={this.handleChange}
                    //글을 쓰면 onChange가 호출되면서 {this.handleChnage}를 호출함
                    />
                    <br/>
                    비밀번호
                    <input
                    type="text"
                    value={this.state.passwd}
                    name="passwd"
                    onChange={this.handleChange}
                    />
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