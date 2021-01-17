import { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
//BrowserRouter를 Router,Route 로도 쓸 수 있게 alias 설정
import Member from './components/Member';
import Login from './components/Login';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navi from './navi/Navi';

class App extends Component{
  render(){
    return (
      <div>
       <Router>
        <div>
          <ul>
            {/* 네비게이션 외부파일로 */}
            <Navi/> 
            </ul>
            <hr/>
            {/* switch 없으면 NoMatch는 항상 출력됨, switch는 일치하는 첫번째만 랜더링함 */}
            </div>
         <div><Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/member' component={Member}/>
          <Route exact path='/login' component={Login}/>
          <Route component={NoMatch}/>
          </Switch>
        </div>

       </Router>
      </div>
      
    )
  }
}
 
export default App;
