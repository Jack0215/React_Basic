import { Component } from 'react';
import {ChildComponent} from './components/ChildComponent'

class App extends Component{
  render(){
    return (
      <div>
        <ChildComponent/>
      </div>
    )
  }
}

export default App;
