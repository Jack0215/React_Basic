import { Component } from 'react';
import {Contact} from './components/Contact';
import {ChildComponent} from './components/ChildComponent';

class App extends Component{
  render(){
    return (
      <div>{/*
        자식 컴포넌트를 this.x에 저장 후 자식의 함수 직접 호출
      */}
        <ChildComponent
        ref={(ref)=>{
          console.log("ref=",ref);
          this.x=ref;
        }}
        />
        <button onClick={(e) => this.x.info()}>자식의 info( )</button>
        {/*자식 함수 직접 호출 */}
      </div>
    )
  }
}

export default App;
