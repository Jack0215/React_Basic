import React, { Component } from "react";

export default class Contact2 extends Component {
  render() {
    // 디스트럭처링
    let { mesg, mesg2 } = this.props;
    return (
      <div>
        <h1>Contact2</h1>
        <h1>{mesg}</h1> <h1>{mesg2}</h1>
      </div>
    );
  }
}
