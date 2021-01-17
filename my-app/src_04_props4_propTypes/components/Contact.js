import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
    static defaultProps={
        mesg:"유관순",
        mesg2:20,
    };
    //defaultProps는 부모에서 초기화 하지 않았을 때 쓰인다.
    static propTypes ={
        mesg: PropTypes.string,
        mesg2: PropTypes.number,
    };
       render() {
           let mesg = this.props.mesg;
        return (
            <div>
                <h1>{mesg}</h1>
                <h1>{this.props.mesg2}</h1>
            </div>
        );
    }
}

//export default Contact;