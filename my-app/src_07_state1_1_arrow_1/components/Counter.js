import React, { Component } from 'react';

export class Counter extends Component {
    //아래 생성자의 this.state와 동일한 기능
    state ={ num:0};
    //arrow 함수를 사용하면 bind필요없음
    handleClick=()=>{
        this.setState(
            {
                num:this.state.num+1 //1씩 증가
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleClick}>num값 증가</button>
            </div>
        );
    }
}