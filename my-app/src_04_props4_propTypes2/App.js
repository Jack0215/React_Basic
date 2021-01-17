import { Component } from 'react';
import {Contact} from './components/Contact'; 

class App extends Component{
  name="홍길동";
  age=20;
  phones=["010","011"];
  my = function (){
    console.log("my함수");
    return "Hello";
  }
  isMarried = false;
  render(){
    return (
      <div>
      <Contact 
      name={this.name}
      age={this.age}
      phones={this.phones}
      my={this.my}
      isMarried={this.isMarried}
      />
      </div>
    )
  }
}

export default App;
