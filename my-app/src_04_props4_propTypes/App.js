import { Component } from 'react';
import {Contact} from './components/Contact'; 

class App extends Component{
  render(){
    return (
      <div>
        <Contact mesg2={10}/>
        {/*<Contact mesg="홍길동" mesg2={10}/> */}
        {/*mesg2를 number로 전송 */}
      </div>
    )
  }
}

export default App;
