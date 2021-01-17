import React, { Component } from 'react';

export class DeptList extends Component {
    render() {
        return (
            <div>
                <h1>Dept홈페이지</h1>
                <table border='1'>
                <thead>
                    <tr>
                        <td>부서번호</td>
                        <td>부서명</td>
                        <td>부서위치</td>
                    </tr>
                 </thead>
                 <tbody>
                        {
                            this.props.deptData.map(function(ele, idx) {
                                return (
                                    <tr key={idx}>
                                        <td>{ele.deptno}</td>
                                        <td>{ele.dname}</td>
                                        <td>{ele.loc}</td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
                </table>
            </div>
        );
    }
}