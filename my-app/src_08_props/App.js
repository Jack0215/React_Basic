import React, { Component } from "react";
import Contact from "./components/Contact";

export class App extends Component {
  render() {
    return (
      <div>
        {/* 자식을 inclue시에 body가 존재할 경우 this.props.children으로 받음 */}
        <Contact mesg="홍길동" mesg2="10">
          HelloWorld <span>Happy</span>
        </Contact>
      </div>
    );
  }
}
export default App;
