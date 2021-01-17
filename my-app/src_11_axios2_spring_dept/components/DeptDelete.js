import React, { Component } from 'react';

export class DeptDelete extends Component {
    constructor(){
        super();
        this.state={
            deptno:''
        };
        this.onDelete = this.onDelete.bind(this);
    }
    onDeptDelete; //부모에게 받은 함수를 저장할 변수
    
    //이벤트 처리
    onDelete(e){
        e.preventDefault();
        const {deptno}=this.refs; //input tag
        this.onDeptDelete(deptno); //부모함수 호출 하면서 input tage 전송
    }
    render() {
        const {onDelete}=this.props; //부모에게서 함수 받기
        this.onDeptDelete=onDelete; //받은 함수 저장

        return (
            <div>
                <h2>부서삭제</h2>
                부서번호:<input type="text" ref="deptno"></input>
                <button onClick={this.onDelete}>삭제</button> 
            </div>
        );
    }
}
