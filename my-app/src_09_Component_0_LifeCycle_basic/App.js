import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      username:"홍길동",
    };
    console.log("가) constructor호출");
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(){
    this.setState(
      {
        username:"이순신"
      }
    )
  }
  static getDerivedStateFromProps(props,state){
    //업데이트 될 때 가장 먼저 호출됨
    console.log("나,마) getDerivedStateFromProps",props,state);
    //값의 접근은 props, state매개변수 사용, this.props, this.state 안됨
    return {};//주의
  }
  //아래 3가지는 같이쓰면 콘솔창에 에러가 뜸. 같이 못쓰도록 변경되었음
  // componentWillMount() {
  //   console.log("componentWillMount")
  // }

  // componentDidMount() {
  //   console.log("componentDidMount")
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps")
  // }
  componentDidMount(){
    console.log("라) componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    //setState() 함수 호출 시 호출, 화면을 새로 출력할지 말지를 결정
    console.log("바) shouldComponentUpdate");
  
    return false; 
    //랜더링 계속 진행 false:진행하지 않음
    //true인 경우 render함수 호출, 호출되자마자 다음 Snapshot 실행
  }
  getSnapshotBeforeUpdate(provProps, prevState){
    console.log("getSnapshotBeforeUpdate",provProps, prevState);
    console.log("바");
    //변경된 화면 완성 후 호출
    return {test:"aaa"}; //리턴 값은 componentDidUpdate의 세번 째 인자로 전달(snapShot)
  }

  componentDidUpdate(prevProps, prevState, snapShot) { //업데이트 마지막 함수
    console.log("componentDidUpdate", snapShot);
  }
  componentWillUnmount() {//컴포넌트 제거 시 호출
    console.log("마) componentWillUnmount");
  }

  render() {
    console.log("다) render")
   
    return (
      <div>
        username:{this.state.username}
        <br/>
        <button onClick = {this.handleEvent}>
          this.state.username값 변경하기
        </button>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;