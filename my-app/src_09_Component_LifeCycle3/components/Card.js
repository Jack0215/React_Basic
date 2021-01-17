import React, { Component } from 'react';

export class Card extends Component {
    constructor(props) {
        super(props);
        console.log("CardPanel.constructor", this.props);
        this.state= {cardNum:0};
    }
    static getDerivedStateFromProps(Props, State){
        console.log("Card - nextProps:",Props);
        console.log("Card - prevState:",State);
        return {};
    }
    // componentWillMount() {
    
    // } //getDerivedStateFromProps랑 같이 사용 안됨

    componentDidMount() {
        console.log("Card.componentDidMount : 렌더링 된 후");
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
                <h1>Card Component</h1>
            </div>
        );
    }
}

Card.propTypes = {

};