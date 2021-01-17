import React, { Component } from "react";

export default class Person extends Component {
  person;
  render(props) {
    this.person = this.props.yyy;
    return (
      <tr key={this.props.yyy2}>
        <td>{this.props.yyy2 + 1}</td>
        <td>{this.person.name}</td>
        <td>{this.person.age}</td>
      </tr>
    );
  }
}
