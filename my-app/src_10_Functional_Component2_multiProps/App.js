import { Component } from 'react';
import {ChildComponent} from './components/ChildComponent'
import {ChildFunction} from './components/ChildFunction';
import ChildFunctionArrow from './components/ChildFunctionArrow'
import ChildDestructuring from './components/ChildDestructuring'
class App extends Component{
  render(){
    return (
      <div>
       <ChildComponent mesg="ChildComponent 전송" mesg2="100"/>
       <ChildFunction mesg="ChildFunction 전송" mesg2="100"/>
       <ChildFunctionArrow mesg="ChildFunctionArrow 전송" mesg2="100"/>
       <ChildDestructuring mesg="ChildDestructuring 전송" mesg2="100"/>
      </div>
      
    )
  }
}
 
export default App;
