import React, { Component } from 'react';
import Person from './Person';

export class PersonList extends Component {
    persons;
    render() {
        this.persons=this.props.xxx;
        return (
            <tbody>
               {this.persons.map(function (row, idx) {
                   return <Person key={idx} yyy={row} yyy2={idx} />;
                   // 한명의 정보 전송 yyy= 한명의 정보 yyy2= index
               })}
            </tbody>
        );
    }
}

export default PersonList;