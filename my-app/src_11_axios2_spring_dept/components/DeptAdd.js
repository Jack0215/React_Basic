import React, { Component } from "react";

export class DeptAdd extends Component {
  constructor() {
    super();
    this.state = {
      deptno: "",
      dname: "",
      loc: "",
    };
    this.onSave = this.onSave.bind(this);
  } // end constructor

  // event
  onDeptAdd; // 부모에게 받은 함수 저장변수
  onSave(e) {
    // 이벤트 처리  부모에게 데이터 전송
    e.preventDefault();
    this.onDeptAdd({ ...this.refs });
  }

  render() {
    const { onSave } = this.props; // 부모에게 함수 받기
    this.onDeptAdd = onSave; // 함수저장
    return (
      <div>
        <h2>부서등록 및 수정</h2>
        <form onSubmit={this.onSave}>
          부서번호: <input type="text" ref="deptno" />
          부서명: <input type="text" ref="dname" />
          부서위치: <input type="text" ref="loc" />
          <button>저장</button>
        </form>
      </div>
    );
  }
}