import { Component } from 'react';
import {ChildComponent} from './components/ChildComponent';

class App extends Component{
  render(){
    return (
      <div>
        {/*자식 컴포넌트를 this.x에 저장 후 자기의 함수 직접 호출하면, 데이터 전송 */}
        <ChildComponent
        ref={(ref)=>{
          console.log("ref",ref);
          this.x=ref;
        }}
        />
        <button onClick={(e)=> this.x.info("red")}>자식의 info('red')</button>
        <button onClick={(e)=> this.x.info("blue")}>자식의 info('blue')</button>
        {/*이벤트를 넘기며 자식 함수 직접 호출 */}
      </div>
      
    )
  }
}

export default App;
