import React, { Component } from 'react';

export class MemberList extends Component {
    memberData;
    render() {
        this.memberData = this.props.memberData
        return (
                <table border="1">
                    <tbody>
                        {this.memberData.map(function(row,idx){
                            console.log(row)
                            return(
                                <tr key={idx}>
                                    <td>{row.username}</td>
                                    <td>{row.age}</td>
                                    <td>{row.address}</td>
                                    </tr>
                                    
                            );
                            })}
                    </tbody>
                </table>
        );
    }
}
