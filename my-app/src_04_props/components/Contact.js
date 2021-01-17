import React, { Component } from "react";

export class Contact extends Component {
  render() {
    // template 함수임
    console.log(this);
    let mesg = this.props.mesg; // this.props 변수명
    let mesg2 = this.props.mesg2;
    return (
      <div>
        <h1>{mesg}</h1>
        <h1>{this.props.mesg}</h1>
        <h1>{this.props.mesg2}</h1>
      </div>
    );
  }
}
export default Contact;
