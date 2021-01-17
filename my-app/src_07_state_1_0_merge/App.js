import { Component } from 'react';
import {ChildComponent} from './components/ChildComponent';
import {Count} from './components/Count';

class App extends Component{
  render(){
    return (
      <div>
        {/*자식 컴포넌트를 this.x에 저장 후 잣기의 함수 직접 호출하면, 데이터 전송 */}
        <ChildComponent/>
        <Count/>
      </div>
      
    )
  }
}

export default App;
