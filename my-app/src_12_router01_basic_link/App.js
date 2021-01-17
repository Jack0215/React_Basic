import { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//BrowserRouter를 Router,Route 로도 쓸 수 있게 alias 설정
import Member from './components/Member';
import Login from './components/Login';
import Home from './components/Home';


class App extends Component{
  render(){
    return (
      <div>
       <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/member'>member</Link>
            </li>
            <li>
              <Link to='/login'>login</Link>
            </li>
            </ul>
            <hr/>
            </div>
         <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/member' component={Member}/>
          <Route exact path='/login' component={Login}/>
        </div>

       </Router>
      </div>
      
    )
  }
}
 
export default App;
