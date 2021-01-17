import { Component } from 'react';
import {Child1} from './components/Child1';
import {Child2} from './components/Child2';

class App extends Component{
  mesg ="홍길동";
  constructor(){
    super()
    this.handleEvent = this.handleEvent.bind(this);
  };
  handleEvent(e){ //파라미터 하나 받아올 수 있게
    console.log("App.handleEvelt",e);
  };
  render(){
    return (
      <div>
       <Child1 mesg = {this.mesg}/> {/*child1 include */}
       <Child2 mesg = {this.mesg} onEvent={this.handleEvent}/>
                                {/*onEvent란 속성명으로 handelEvent를 자식에게 넘기고 있음*/}
      </div> 
    );
  }
}
export default App; 