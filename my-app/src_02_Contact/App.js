import React, { Component } from "react";
import { Contact, Contact2 } from "./components/Contact";

class App extends Component {
  // method() {} // 뷰 - script 부분
  render() {
    // render 함수 안의 프로그램 코드 작성
    // 화면에 dom 그리는 함수 :vue-template부분
    return (
      <div>
        <h1>AppComponent</h1> <br />
        <Contact />
        <Contact2 />
        {/* 2. 컴포넌트 include  */}
      </div>
    );
  }
}
export default App;
