import React, { Component } from "react";

export class ChildComponent extends Component {
	constructor() {
		//생성자
		super(); //반드시 super();
		this.submit = this.submit.bind(this); //이벤트 처리 함수 만들고 this를 반드시 //바인딩 주의
	}
	render() {
		//div 없음
		return (
			<form onSubmit={this.submit}>
				아이디
				<input type="text" ref="userid" />
				비밀번호
				<input type="text" ref="passwd" />
				<button>로그인</button>
			</form>
		);
	} //end render

	submit(e) {
		e.preventDefault();
		console.log("submit", this);
		//input 태그의 ref 값을 this.refs로 참조함
		const { userid, passwd } = this.refs;
		console.log(userid);
		console.log(passwd);
		console.log(userid.value + "\t" + passwd.value);
	}
}