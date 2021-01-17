import React, { Component } from 'react';
import {Card} from './Card'

export class CardPanel extends Component {
    //1.생성자
    constructor(props) {
        super(props);
        console.log("CardPanel.constructor", this.props);
        this.state={
            cardPanelNum:0,
        }
    }

    componentWillMount() {
        console.log("CardPanel.componentWillMount : 렌더징 되기 전");
    }

    componentDidMount() {
        console.log("CardPanel.componentDidMount : 렌더징 된 후");
    }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (
            <div>
                <h1>CardPanel component</h1>
                <Card xx={10}/>
            </div>
        );
    }
}

CardPanel.propTypes = {

};
