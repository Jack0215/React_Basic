import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    let mesg = this.props.mesg;
    let mesg2 = this.props.mesg2;

    let body = this.props.children; // html 데이터 파싱
    console.log(mesg, "\t", mesg2);
    console.log(body[0], "\t", body[1].props.children);
    return (
      <div>
        {mesg}
        <br />
        {this.props.mesg2}
        <br />
        {body}
        <br />
        <br />
      </div>
    );
  }
}
