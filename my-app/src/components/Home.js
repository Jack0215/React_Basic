import React, { Component } from 'react';

// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Home</h2>
//             </div>
//         );
//     }
// }
// export default Home;

function Home({history}) {
    return (
        <div>
            <h2>Home</h2>
            <button onClick={()=>{history.push('/login')}}>로그인화면으로</button>
        </div>
    )
}

export default Home;
