import React, { Component } from 'react';

export class Contact extends Component {
    mesg="홍길동"
    constructor(){
        super();
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){ //2.이벤트처리함수 등록, 호출 시 부모함수 호출 데이터 전송
        console.log("Child.handle",this.testMethod); //부모에게서 넘어온 함수
        this.Method(this.mesg); //부모에게서 넘어온 함수 호출(데이터 전송)
    }
    render() {
        const xxx =this.props.onAdd; //부모함수 파싱, xxx에 저장
        this.testMethod = this.props.onAdd; //1. 부모 함수 파싱 this.testMethod 저장
        return (
            <div>
                Contact 현재 카운트 : {this.props.count}
                <br/>
                {/*넘겨져온 함수 호출 */}
                {/* <button onClick={
                    ()=> this.props.onAdd(this.mesg)
                }>
                    카운트증가1
                </button> */}

                {/* <button onClick={xxx(this.mesg)}>카운트증가2</button><br/> //변수에 파라미터 담아서 사용할 수 없음 */}

                {/* <button onClick={
                    ()=> xxx(this.mesg)
                }>카운트증가3
                </button> */}

                <button onClick={this.handleEvent}>카운트증가4</button><br/>
                {/* 카운트증가1 과 같음 */}
                {/* handleEvent -> 부모 함수 호출 데이터 전달 */}

            </div>
        );
    }
}