import React, { Component } from 'react';

export class ChildComponent extends Component {
  constructor(){
	  super();
	  this.submit = this.submit.bind(this) //바인딩 주의
  }
 
  render() {
    return (
      <form onSubmit={this.submit}>
        아이디 
		{/*<input type="text" ref={this.userid} />*/}
		<input type="text" ref={(y)=>{
			console.log("y>>",y);
			this.userid=y;}}/>
        <br />
		비밀번호 
		<input type="text" ref={(x)=>{console.log("x:",x);
	this.passwd=x;
	}} />
        <br />
        <button>로그인</button>
      </form>
    );
  }//end render()

  submit(e) {
	e.preventDefault();
	console.log('submit', this.refs);
	console.log('submit this.passwd===',this.passwd);
	//this.passwd는 dom자체가 됨
	//input 태그의 ref값을 this.refs로 참조함
	const {userid} = this.refs; //passwd생략
	this.userid.value="AAAAAA";
	userid.focus();
	this.passwd.vlaue="BBBB";
    console.log(userid.value + "\t"+ this.passwd.value);
  }
}

export default ChildComponent;