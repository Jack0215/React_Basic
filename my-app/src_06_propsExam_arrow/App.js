import React, { Component } from "react";
import PersonList from "./components/PersonList";

class App extends Component {
  persons = [
    //this 키워드로 접근
    { name: "홍길동", age: 20 },
    { name: "이순신", age: 30 },
    { name: "유관순", age: 40 },
    { name: "강감찬", age: 50 },
  ];
  render() {
    // 자식에게 데이터 전달
    return (
      <div>
        <table border ="1">
          <thead>
            <tr>
              <td>번호</td>
              <td>이름</td>
              <td>나이</td>
            </tr>
          </thead>
          <PersonList xxx={this.persons} />
        </table>
      </div>
    );
  }
}
export default App;
