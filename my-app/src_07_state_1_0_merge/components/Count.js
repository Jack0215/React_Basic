import React, { Component } from "react";

export class Count extends Component {
	constructor() {
		super();
		this.state = {
			xyz: 0, //증가값
		};
		this.handleClick = this.handleClick.bind(this); //handleEvent에 state를 바인딩
	}
	handleClick() {
		console.log("handleClick=====");
		//다음은 기존 this.state에 새로운 변수가 병합(merge)형태로 설정됨
		this.setState({
			xyz: this.state.xyz + 1, //기존값을 2증가 this.setState함수 사용
			userid: "홍길동", //userid가 추가병합됨
		}); //end State
	}
	render() {
		//{this.state.변수명}랜더링
		return (
			<div>
				<h2>{this.state.xyz}</h2>
				<h2>{this.state.userid}</h2>
				<button onClick={this.handleClick}>xyz값 증가</button>
			</div>
		);
	}
}