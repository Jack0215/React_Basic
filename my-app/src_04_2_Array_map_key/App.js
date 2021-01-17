import React, {Component} from 'react';
import Contact from './components/Contact';

class App extends Component{
  render(){
    const persons = [
      //this 키워드로 접근
      { name: "홍길동", age: 20 },
      { name: "이순신", age: 30 },
      { name: "유관순", age: 40 },
      { name: "강감찬", age: 50 },
    ];
    //배열컴포넌트 사용시 유일키값 정의, 다시 출력시 
    //기존의 컴포넌트를 재활용하여 성능을 높임

    const contactProps = persons.map((row,idx) =>{
      return (
      <li key={`t1_${idx}`}>{row.name}</li>
      );

    });
      return <div><ul>{contactProps}</ul>
      <Contact/></div>
    };
  }

export default App;
