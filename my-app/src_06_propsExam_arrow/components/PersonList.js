import React, { Component } from 'react';

export class PersonList extends Component {
    persons;
    render() {
        this.persons=this.props.xxx;
        console.log(this.persons);
        var xxx=this.persons.map(function(row,idx){
            return(
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                </tr>
            );
        });//end xxx
        var xxx2=this.persons.map((row,idx)=>{
            return(
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                </tr>
            );
        });//end xxx2

        console.log(xxx2);

        return (
            <tbody>
                {xxx}
                {xxx2}
            </tbody>
        );
    }
}

export default PersonList;