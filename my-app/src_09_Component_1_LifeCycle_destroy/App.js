import React, { Component } from 'react';
import {Contact} from './components/Contact';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {destroy:false};
    //destroy를 가지고 컴포넌트 삭제 여부 판단함, 판단 변수임
    console.log("constructor 호출");
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps");//호출되는지
    return {}; //리턴값은 꼭 넣어줘야함
  }

  componentDidMount() { //컴포넌트의 생성과 연관있음
    console.log("componentDidMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }
  componentWillUnmount() { //컴포넌트의 삭제와 연관있음
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render호출");
    return (
      <div>
          {this.state.destroy? null: <Contact/>}
          {/*destroy가 T이면 null, F이면 Contact 화면에 보이게(보였다가 제거) */}
          {/*False로 렌더링했다가 True로 렌더링 하면 Contact가 제거 되는것을 볼 수 있음 */}
      </div>
    );
  }
}

App.propTypes = {

};

export default App;