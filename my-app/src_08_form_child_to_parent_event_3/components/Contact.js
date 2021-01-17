import React, { Component } from 'react';

export class Contact extends Component {
    mesg="call";
    testMethod="";
    constructor(){
        super();
        this.print=this.print.bind(this);
    }
    print(){ //2. 이벤트 처리 함수로 등록, 호출 시 부모함수 호출 데이터 전송
        //console.log("Child.handle",this.testMethod);
        this.testMethod(this.mesg); //부모함수 호출  -데이터 전송
    }
    render() {
        //const xxx = this.props.onAdd //부모함수 파싱 xxx에 저장
        this.testMethod = this.props.printInfo; //1. 부모함수 파싱 this.testMethod 저장
        return (
            <div>
                {/* <button onClick={
                    ()=>this.props.print(this.mesg)
                }>
                    카운트증가1
                </button> */}
                <br/>
                <button onClick={this.print}>버튼2
                </button>
                <br/>
            </div>
        );
    }
}
