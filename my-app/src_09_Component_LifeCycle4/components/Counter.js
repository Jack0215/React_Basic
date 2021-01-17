import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);
        console.log("Counter.construcor props:",props);
        this.state={num:0};
        this.handleClick = this.handleClick.bind(this);
    }//end

    handleClick(){
        this.setState({
            num:this.state.num+1
        });
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps-props:",props);
         //props에는 App.js에서 xxx로 넘겨준 3이 들어가있음, xxx=3
        console.log("getDerivedStateFromProps-state:",state);
        //state는 8라인에서 지정한 num=0 값이 들어가있음, num=0
        if(props.xxx === state.num) {
            return {num:100}; //num값을 100으로 갱신
        }else {
            return true;
        }

    }
     componentWillMount() {

     }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

     componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("Counter.componentDidUpdate-prevProps :",prevProps);
        console.log("Counter.componentDidUpdate-prevState :",prevState);
        console.log("Counter.componentDidUpdate-snapShot :",snapShot);
     }

    // componentWillUnmount() {

    // }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("Counter.getSnapshotBeforeUpdate-prevProps",prevProps);
        console.log("Counter.getSnapshotBeforeUpdate-prevState",prevState);
        console.log("===========================");
        return { count:1};
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleClick}>버튼</button>
            </div>
        );
    }
}

Counter.propTypes = {

};