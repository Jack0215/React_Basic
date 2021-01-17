import { Component } from 'react';
import {Contact} from './components/Contact'
class App extends Component{
  //프로퍼티를 이용하여 부모의 언본을 수정할 수 있는 함수를 하위 컴포넌트 제공하여
  //하위 컴포넌트에서 상위 컴포넌트의 프로퍼티를 변경
  constructor(){
    super();
    this.state ={
      num:1,
    };
    //바인딩
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(aa){
    console.log("App.handleEvent:",aa);
    this.setState(
      {
        num: this.state.num+1
      }
    );
    //this.setState(({num})=>({num:num+1}));
  }
  render(){
    return (
      <div>
       <Contact count = {this.state.num} onAdd={this.handleEvent}/>
       {/*handleEvent를 자식에게 넘겨줌 */}
      </div>
      
    )
  }
}

export default App;