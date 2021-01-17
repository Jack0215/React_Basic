import React from 'react';
import queryString from 'query-string'; // xxx=100이란 값을 뽑아보게 해줌

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
    console.log("match",match);
    console.log("history",history);
    console.log("location",location);
    // const query=queryString.parse(location.search);
    // console.log("query:",query);
    return (
        <div>
             <h2>Member</h2>
              params:{match.params.id}입니다.<br/>
              {/* queryString: {query.xxx} */}
        </div>
    )
}

export default Member;
