import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
        render() {
           let mesg = this.props.mesg;
           let age = this.props.age;
           let phones = this.props.phones;
            console.log("phones",phones);
           let isMarried = this.props.isMarried;
           console.log("isMarried",isMarried);
           let fun = this.props.fun;
           console.log("fun",fun);
        return (
            <div>
                <h1>{mesg}</h1>
                <h1>{age}</h1>
                {this.props.phones}
                {phones[0]}
                {this.props.isMarried+""}
                {this.props.my()}
            </div>
        );
    }
}

Contact.defaultProps ={
    name:"유관순",
    age:20
};

Contact.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    phones: PropTypes.array,
    my: PropTypes.func,
    isMarried: PropTypes.bool
}
//export default Contact;