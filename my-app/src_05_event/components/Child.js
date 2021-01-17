import React, { Component } from 'react';

export class Child extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>handleEvent</button>
                <br/>
                <button onClick={this.handleEvent2}>handleEvent</button>
                <br/>
                <a href="https://naver.com" onClick={this.handleEvent3}>
                handleEvent3
                </a><br/>
                <button onClick={() => this.a()}>a()</button>
                <br/>
                <button onClick={ (e)=> this.b(e,100) }>b()</button><br/>
            </div>
        );
    }//end render
    a(){
        console.log("aaaaa");
    }
    b(){
        console.log("bbbbb");
        
    }
    handleEvent(){
        console.log("handleEvent");
    }
    handleEvent2(e){
        console.log("handleEvent2");
    }
    handleEvent3(e){
        console.log("handleEvent3");
        e.preventDefault();
        //retrun false 지원 안됨
    }
}
//이벤트 처리함수작성 