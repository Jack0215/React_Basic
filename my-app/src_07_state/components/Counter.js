import React, { Component } from 'react';

export class Counter extends Component {
    constructor (  ){ //1. 생성자 작성, super(), this.state, 이벤트 처리 함수 예 .bind(this)
        super()
        this.state={ //state 변수 선언 및 초기화
            xyz:0,
            number:100,
        };
        this.handelClick = this.handelClick.bind(this); //handleEvent에 this(state)를 바인딩
    }//end constructor

    handelClick(){
        console.log("handleCilick()");
        this.setState({ //state 값 변경 시 this.setState({}) 를 반드시 이용
            xyz:this.state.xyz+1, // 기존값을 1 증가 this.setState 함수 사용
        })//end setState
    }

    render() {
        //{this.state.변수명} 랜더링
        return (
            <div>
                <h2>{this.state.xyz}</h2>
                <p>{this.state.number}</p>
                <button onClick={this.handelClick}> xyz값 증가 </button>
            </div>
        );
    }
}