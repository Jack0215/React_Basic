import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Member from './components/Member';
import NoMatch from './components/NoMatch';
import Navi from './navi/Navi';
import myPage from './components/MyPage';
import Posts from './components/Post';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              {/* 네비게이션 외부파일로 */}
              <Navi></Navi>
            </ul>
            <hr/>
         <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            {/* 라우터를 걸어줌, 주소가 /이면 Home 컴포넌트를 연결하도록 */}
            <Route exact path='/member/' component={Member}/>
            {/* id란 키 값으로 뽑아올 수 있도록 설정 */}
            <Route exact path='/member/:id' component={Member}/>
            <Redirect from='/users/login' to='/login'/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/myPage' component={myPage}/>
            <Route path='/posts' component={Posts}/>
            <Route component={NoMatch}/>
          </Switch>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;