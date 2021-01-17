import React, { Component } from 'react';
import {MemberList} from './MemberList'

export class Member extends Component {
    constructor(){
        super()
        this.state={
            memberData:[],
            username:"", 
            age:"",
            address:"",
        };
        //바인딩
        this.addMember=this.addMember.bind(this);
        this.handleChange=this.handleChange.bind(this);
        //xyz 함수는 직접 호출
    }
    render() {
        return (
            <div>
            이름
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            나이
            <input type="text" name="age" value={this.state.age} onChange={this.handleChange}></input>
            주소
            <input type="text" name="address" value={this.state.address} onChange={this.handleChange}></input>
           <button onClick={this.addMember}>저장</button>
           <button onClick={this.xyz.bind(this,"홍길동")}>xyz함수 호출</button> {/*바인딩을 여기서 함*/}
           <MemberList memberData={this.state.memberData}/>
            </div>
        );
    }
    addMember(){
        console.log(this.state.memberData);
        let xxx = this.state.memberData;
        xxx.push(
            {
                username:this.state.username, 
                age:this.state.age,
                address:this.state.address
            } );
        this.setState(
            {
                memberData:xxx, //memberData를 한명이 더 추가된 xxx로 변경
            }
        )
    }
    handleChange(e){ //텍스트박스 한 항목을 state에 {key:value}로 저장
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState); //username과 phone에 입력값 추가
    }
    xyz(e){
        console.log("xyz함수 출력");
    }
}