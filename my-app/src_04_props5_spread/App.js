import { Component } from 'react';
import {First} from './components/First';

class App extends Component{
  render(){
    return (
      <div>
        <First id="홍길동" pw="1234"/>
      </div>
    )
  }
}

export default App;
