import React, { Component } from 'react';

// class Member extends Component {
    
//     render() {
//         console.log(this.props.match);
//     console.log(this.props.history);
//     console.log(this.props.location);
//         return (
//             <div>
//                 <h2>Member</h2>
//             </div>
//         );
//     }
// }

const Member=({match, history, location})=>{
    console.log(this.props.match);
    console.log(this.props.history);
    console.log(this.props.location);
    return (
        <div>
             <h2>Member</h2>
        </div>
    )
}

export default Member;
