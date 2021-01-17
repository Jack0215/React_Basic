import React, { Component } from 'react';

export class Contact extends Component {
    constructor(){
        super();
        this.state={
            contactData: [
                { name: "Allen", phone: "000-000-0001" },
                { name: "Bob", phone: "000-000-0002" },
                { name: "Charli", phone: "000-000-0003" },
                { name: "David", phone: "000-000-0004" },
              ],
              username:"",
              phone:""
        }//end this.state
        this.handle=this.handle.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handle(){
        let xxx = this.state.contactData;
        xxx.push({name:this.state.username, phone:this.state.phone} );
        this.setState(
            {
                contactData:xxx, //contactData를 한명이 더 추가된 xxx로 변경
            }
        )
    }
    handleChange(e){
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState); //username과 phone에 입력값 추가
    }
    render() {
        return (
            <div>
                {this.state.contactData.map((row,idx)=>{
                    return(
                        <div key={idx}>
                            {row.name} {row.phone}
                            </div>
                    );
                })}
                이름
                <input
                type="text"
                name="username" //생성자에서 만든 변수와 이름 일치시킬것
                id="kkk"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <br/>
                전화번호
                <input
                type="text"
                name="phone" //생성자에서 만든 변수와 이름 일치시킬것
                id="kkk"
                value={this.state.phone}
                onChange={this.handleChange}
                />
                <button onClick={this.handle}>추가하기</button>
                <br/>
            </div>
        );
    }
}
