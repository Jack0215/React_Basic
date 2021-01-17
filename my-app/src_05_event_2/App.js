import { Component } from 'react';

class App extends Component{
  constructor(){ {/*변하는 값을 생성자에 넣어줌 */}
    super();
    this.state = {
      count:0
    };
    this.handleEvent = this.handleEvent.bind(this); //바인딩
    this.reset = this.reset.bind(this); //바인딩
  }
  handleEvent(){
    this.setState(({count})=>({count: count+1}));
    
    console.log("handleEvent호출");
  }//end
  reset(){
    this.setState({count:0});
    console.log("reset호출");
  }

  render(){
    return (
      
      <div>
        
        <h1>현재 카운드 {this.state.count}</h1> {/*카운트 값 렌더링*/}
        <button onClick={this.handleEvent} onMouseOut={this.reset}>
          버튼 밖으로 커서가 움직이면 카운트 값이 0으로 초기화 됩니다.
        </button>
      </div>
    );
  }
}


export default App;