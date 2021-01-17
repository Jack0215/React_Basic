import React, { Component } from "react";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    // 자식에게 데이터 전달
    const persons = [
      { name: "홍길동", age: 20 },
      { name: "이순신", age: 30 },
      { name: "유관순", age: 40 },
    ];

    const contactProps = persons.map((row) => {
      return <Contact username = {row.name} />;
    });
    
    return (
      <div>
        {contactProps}
      </div>
    );
    
  }
}
export default App;