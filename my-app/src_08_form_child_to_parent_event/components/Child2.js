import React, { Component } from 'react';

export class Child2 extends Component {
    render() {
        //객체 destucturing
        const {mesg, onEvent} = this.props;
        var p = {username:"홍길동", age:20};
        console.log("onEvent",onEvent);
        return (
            //onClick={onEvent}는 부모의 함수를 부르지 못함. 부모의 함수를 호출해야함
            //리액트 초심자가 할 수 있는 실수, 이렇게 코딩하면 해당 함수가 랜더링 될 때 호출이됨
            <div>
                <h1>child2 Component</h1>
                <h1>{mesg}</h1>
                        {/*자식 함수 호출*/}
                <button onClick= {
                    () => {
                        onEvent(); //부모의 함수 호출
                    }
                }> ok1 arrow
                </button> <br/>


                <button onClick ={
                    ()=>{ //child2 함수를 사용
                        onEvent(p); //부모함수 호출, 데이터 전달
                    }
                }>
                    ok2 arrow p 데이터 전달
                </button>
                <br/>
                <button onClick={onEvent()}>onEvent()</button>
            </div>
        );
    }
}
