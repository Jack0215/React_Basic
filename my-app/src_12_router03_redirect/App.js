import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Member from './components/Member';
import NoMatch from './components/NoMatch';
import Navi from './navi/Navi';
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
            <Route exact path='/member' component={Member}/>
            <Redirect from='/users/login' to='/login'/>
            <Route exact path='/login' component={Login}/>
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