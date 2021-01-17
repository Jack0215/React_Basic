import React, { Component } from 'react';

export class ChildComponent extends Component {
    constructor() {
        super();
        this.state={
            //객체상태 저장 변수, 초기화 this.state={key:value} 생성자에서 초기화
        colorName: "white"
    }
} //end 생성자
    info(x){
        //부모에서 넘어오는 데이터 받기
        console.log("childcomponent info:",x);
        //객체 상태 변수를 부모에게서 넘어온 값으로 변경
        this.setState({
            //this.state값의 변경은 반드시 this.setState({객체값}) 함수 사용
            colorName:x //객체 상태 this.state.colorName값 변경, this.state.변수명 = 값 안됨
        })
    }
    render() {
        //state변수를 사용 스타일 지정
        return (
            <h1 style={{background:this.state.colorName, fontSize:"50px"}}>
                컴포넌트 ref 실습
            </h1>
        );
    }//end render
}
