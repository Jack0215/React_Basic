import React from 'react';
import {Route, Link} from 'react-router-dom';

const Posts= ()=>{
    return (
        <div>
            <h2>포스트</h2>
            <Link to="/posts/React">React</Link>&nbsp;&nbsp;
            <Link to="/posts/Redux">Redux</Link>&nbsp;&nbsp;
            <Link to="/posts/Angular">Angular</Link>&nbsp;&nbsp;
            <Route path="/posts/:title" component={Post}/>
        </div>
    );
};
            // match에는 8,9,10 주소가 들어오면 작동함
const Post=({match})=>{
    return(
        <div>
            {match.params.title}입니다.
        </div>
    )
}
export default Posts;