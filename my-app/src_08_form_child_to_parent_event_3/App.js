import { Component } from 'react';
import {Contact} from './components/Contact';

class App extends Component{
  constructor(){
    super();
    this.printInfo=this.printInfo.bind(this);
  }
  printInfo(mesg){
   console.log("App.printInfo",mesg);
  }
  render(){
    return (
      <div>
       <Contact print = {this.printInfo} />
       </div>
    );
  }
}

export default App;
