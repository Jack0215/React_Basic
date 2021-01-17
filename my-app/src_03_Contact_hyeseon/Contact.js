import React, { Component } from "react";
import "./Contact.css"; // css import
// export와 export default 의 차이
// 1. export Default는 모듈(파일)에서 반드시 하나만 사용
// import 시 import Contact from './Contact', {} 없음
// 2. export는 모듈(파일)에서 여러번 사용가능
// import {Contact, Contact2} from './Contact', {} 필요 as 사용 alias가능

// 1. JSX에서 변수값 사용시 {}이용, 반드시 root 태그(div)가 있어야하며  ex) 아래같은 경우는 mesg사용하고싶음
// ""사용안함
// rcc
export class Contact extends Component {
  render() {
    let mesg = "world"; // 랜더 함수 안에 선언
    // 화면에 구현 부분 template
    return (
      <div>
        {mesg} &nbsp;{100} &nbsp;
        {"Hello"}
      </div>
    );
  }
}

// 2. JSX에서 자바스크립트 사용시 {} 이용
export class Contact2 extends Component {
  //export default Contact사용안하고 클래스에 export사용
  render() {
    let myArr = ["A", "B", "C"]; 
    //1. 랜더함수안에 선언한 return에서 html부분에 사용하고 싶을 때 {}이용하여 불러주기
    return (
      //2. html구현 부분 root 태그 있어야함 <div></div>안에 써줘야한다
      <div>
        <ul>
          {
            //자바스크립트 코드사용하기 위해서 {}사용
            myArr.map(function (row, idx) {
              console.log(row, "\t", idx);
              return (
              <li key={idx}>{row}</li>
              )
            })
          }
        </ul>
      </div>
    );
  } //render끝
}
//export default Contact;

// 2-1 자바스크립트 코드가 render밖에 있기 때문에 다양한 작업이 가능
var myArr = ["D", "E", "F"]; // 클래스, 메소드 밖에 선언
function my() {
  // 클래스, 메소드 밖에 선언
  return myArr.map(function (row, idx) {
    return <li key={idx}>{row}</li>;
  });
}
export class Contact21 extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            // 자바스크립트 코드 사용시 {}사용
            my()
          }
        </ul>
      </div>
    );
  } // end render
} // end class

// 3. jsx에서 spread 연산자의 사용
export class Contact3 extends Component {
  render() {
    // 변수 선언, 랜더 함수 안
    var attr = {
      href: "https://www.daum.net",
      target: "_blank",
    };
    return (
      <div>
        {/* ...attr: attr안에 있는 모든 데이터를 가져올 수 있음  */}
        <a {...attr}>daum: {attr.href}</a>
      </div>
    );
  }
}

// 4. jsx에서 사용하는 multi node 사용의 예
export class Contact4 extends Component {
  render() {
    // 랜더 함수 내 변수 선언
    var multi = [<span key="_1">Hello</span>, <span key="_2">Hello</span>];
    // 유니크 key 사용
    return <div>{multi}</div>;
  }
} // end class

// 5. jsx 에서는 이벤트 처리시 camel 표기법 필수
function myok() {
  // 클래스 밖에 선언
  // this 키 없이 사용
  console.log("myok");
}
export class Contact5 extends Component {
  // 메서드 선언
  myok2() {
    // 클래스 안에 선언
    console.log("myok2");
  } // end myOk2
  render() {
    return (
      <div>
        <button onClick={myok}>myOk</button> &nbsp;
        <button onClick={this.myok2}>myOk</button>
      </div>
    );
  } // end render
} // end class

// 6. jsx에서 css는 className, label은 htmlFor 형식으로 사용
export class Contact6 extends Component {
  render() {
    return (
      <div>
        <p className="xyz">hello-css 적용</p>
        <label htmlFor="myInput">hello2</label>
        <input type="text" id="myInput" />
      </div>
    );
  }
}

// 7. jsx에서는 style이 객체로 처리됨
// backgroundColor
// fontSize, textAlignt 같은 카멜 표기법 사용
export class Contact7 extends Component {
  render() {
    var myStyle = { fontSize: "50px", background: "yellow" };
    return (
      <div>
        <p style={myStyle}>myStyle 적용됨</p>
        <p style={{ fontSize: "20px", backgroundColor: "red" }}>
          myStyle 적용됨 2
        </p>
      </div>
    );
  }
}

// 8. jsx 주석은 {/* */}형식으로 사용,
// 반드시 container root 태그 안에서 사용하여야함
export class Contact8 extends Component {
  render() {
    // root 태그 밖의 주석
    var myStyle = { fontSize: "50px", background: "yellow" };
    return (
      <div>
        {/* 이것은 주석입니다. ㅋㅋ  */}
        <p style={myStyle}>myStyle 적용됨</p>
        <p style={{ fontSize: "20px", backgroundColor: "red" }}>
          myStyle 적용됨 2
        </p>
      </div>
    );
  }
}
