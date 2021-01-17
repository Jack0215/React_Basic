import { Component } from "react";
import axios from "axios";
import {DeptAdd} from "./components/DeptAdd";
import {DeptList} from "./components/DeptList";
import {DeptDelete} from "./components/DeptDelete";

class App extends Component {
  constructor(){
    super();
    this.state={
      deptData:[]
    }
    this.onAppDelete = this.onAppDelete.bind(this);
    this.onAppSave = this.onAppSave.bind(this);
  }
  
  list(){
    var url="http://211.104.174.163:8079/app/";
    axios.get(url)
    .then((responseData) =>{
      console.log(responseData);
      this.setState({
        deptData:responseData.data
      })
    }).catch((error) => {console.log("error")});
  } // end list
  componentDidMount() {
		this.list();
  }
  onAppSave(x){
    var url="http://211.104.174.163:8079/app/add";
    axios.post(url, {deptno:x.deptno.value, dname:x.dname.value, loc:x.loc.value})
    .then((responseData) =>{
      var arr = this.state.deptData;
      arr.push({deptno:x.deptno.value, dname:x.dname.value, loc:x.loc.value});
      this.setState({
        deptData:arr
      });
    }).catch((error)=>{console.log("error")});
  }

  //삭제이벤트
  onAppDelete(x){
    var url = "http://211.104.174.163:8079/app/del?deptno="+x.value;
    console.log("x>" + x.value);
    axios.delete(url).then((responseData) => {
      this.list();
    }).catch((error) => {console.log("error")});
  } // end onAppDelete
  
  render() {
    return (
      <div>
        <DeptAdd onSave={this.onAppSave} />
        <DeptDelete onDelete={this.onAppDelete} />
        <DeptList deptData={this.state.deptData} />
      </div>
    );
  }
}

export default App; 