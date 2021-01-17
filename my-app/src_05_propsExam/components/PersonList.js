import React, { Component } from "react";

export default class PersonList extends Component {
  persons; // this 키로 접근
  render() {
    this.persons = this.props.xxx; // 파싱
    console.log(this.persons);
    return (
      // div 생략
      <tbody>
        {this.persons.map(function (row, idx) {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          );
          
        })}
        
      </tbody>
      
    );
  }
}
