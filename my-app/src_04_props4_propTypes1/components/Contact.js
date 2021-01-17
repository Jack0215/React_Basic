import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
    static defaultProps={
        mesg:"유관순",
        //age:"20",
    };
    static propTypes ={
        mesg: PropTypes.string,
        age: PropTypes.number.isRequired //이 값은 무조건 넘어와야한다.
        //넘어오지 않을 경우 콘솔창에 에러가 뜬다.
    };
       render() {
           let mesg = this.props.mesg;
        return (
            <div>
                <h1>{mesg}</h1>
                <h1>{this.props.age}</h1>
            </div>
        );
    }
}

//export default Contact;