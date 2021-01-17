import { Component } from 'react';
import {ChildComponent} from './components/ChildComponent'
import {ChildFunction} from './components/ChildFunction';
import ChildFunctionArrow from './components/ChildFunctionArrow'
import ChildDestructuring from './components/ChildDestructuring'
class App extends Component{
  render(){
    return (
      <div>
       <ChildComponent mesg="ChildComponent 전송"/>
       <ChildFunction mesg="ChildFunction 전송"/>
       <ChildFunctionArrow mesg="ChildFunctionArrow 전송"/>
       <ChildDestructuring mesg="ChildDestructuring 전송"/>
      </div>
      
    )
  }
}
 
export default App;
