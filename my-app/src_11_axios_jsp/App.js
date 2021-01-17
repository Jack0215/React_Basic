import { Component } from 'react';
import axios from 'axios';

class App extends Component{
  mesg="홍길동"
  constructor(){
    super();
    this.handleEvent = this.handleEvent.bind(this);
    this.handleEvent2 = this.handleEvent2.bind(this);
  }
  //이벤트
  handleEvent(e){ 
    axios.get("http://localhost:8073/AngularWeb/getPersonList.jsp")
    //데이터가 전송되었을 때
    .then((responseData)=>{
      console.log(responseData);
    }).catch((error)=>{
      console.log("error");
    });
  }
  handleEvent2(e){
    const person = {
      id:'a',
      name:'이재윤',
      age:'29',
    };
    axios.get("http://localhost:8073/AngularWeb/addPerson.jsp",
    {params:person}).then((responseData)=>{  //params로 person을 전송=>const person이 전송됨
      console.log(responseData);
    }).catch((error)=>{
      console.log("error");
    });
  };
  render(){
    return (
      <div>
        <button onClick={this.handleEvent}>보기</button> &nbsp;
        <button onClick={this.handleEvent2}>보기2</button>
      </div>
      
    )
  }
}
 
export default App;
