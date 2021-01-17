import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const username = this.props.username;
        return (
            <div>
                Contact {username}
            </div>
        );
    }
} 

export default Contact;