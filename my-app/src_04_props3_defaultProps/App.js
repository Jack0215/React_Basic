import { Component } from 'react';
import {Contact} from './components/Contact';

class App extends Component{
  render(){
    return (
      <div>
        Hello World
        <Contact mesg="홍길동" mesg2="10"/>
        <Contact/>
      </div>
    )
  }
}

export default App;
