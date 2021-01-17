import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);
        console.log("Counter.constructor",props.xxx);
        this.state={num:props.xxx}; //0
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            num : this.state.num +1,
        });
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Counter.shouldComponentUpdate 컴포넌트가 수정할 지 결정 중.." );
        console.log("Counter.shouldComponentUpdate.nextProps",nextProps);
        console.log("Counter.shouldComponentUpdate.nextState",nextState);
        if(nextState.num === 4){
            return true; //화면 갱신
        } else {
            return false; //화면 갱신 하지 않음
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Counter.getSnapshotBeforeUpdate = 컴포넌트가 리렌더링 후 바로 호출 됨");
        console.log("Counter.getSnapshotBeforeUpdate.prevProps",prevProps);
        console.log("Counter.getSnapshotBeforeUpdate.prevState",prevState);
        return {aa:300};
    }

    componentWillUpdate() {}

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("Counter.componentDidUpdate == 컴포넌트가 리렌더링 완료 된 후 호출됨")
        console.log("Counter.componentDidUpdate.prevProps",prevProps);
        console.log("Counter.componentDidUpdate.prevState",prevState);
        console.log("Counter.componentDidUpdate.snapShot",snapShot);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>현재 카운드 {this.state.num}</h1>
                <button onClick={this.handleClick}>버튼</button>
            </div>
        );
    }
}

Counter.propTypes = {

};