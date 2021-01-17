import React, { Component } from 'react';

export class ChildComponent extends Component { // 여기서 export
    constructor(){ // 생성자
        super(); // 반드시 super()
        this.submit = this.submit.bind(this); // 이벤트처리 함수 만들고 this를 반드시 바인딩 주의
    }
    render() {
        return (
            <form onSubmit = {this.submit}>
                아이디<input type="text" ref={(y) => {
                    console.log("y ", y);
                    this.userid = y;
                }}/>
                {/* ref 값으로 콜백함수 지정가능. 태그 자체를 this.passwd 변수에 저장 */}
                비밀번호<input type="text"
                    ref={(x) => {
                    console.log("x ", x);
                    this.passwd = x;
                }}/>
                <button>로그인</button>
            </form>
        );
    } // end render
    submit(e) {
        e.preventDefault(); // return false 지원 안 함
        // console.log("submit ", this.refs);
        console.log("submit this.passwd === ", this.passwd);
        // this.passwd는 DOM 자체가 됨
        // input 태그의 ref 값을 this.refs로 참조함
        // const { userid } = this.refs; // passwd 생략
        // userid.value = "AAAAAAAA";
        // userid.focus();
        console.log(this.userid.value + "\t" + this.passwd.value);
    }
} // end class

//export default Child;