import axios from "axios";
import React, { Component } from "react";
import { DeptList } from "./components/DeptList";

class App extends Component {
	constructor() {
		super();
		this.state = {
			deptData: [],
		};
		// this.onAppSave = this.onAppSave.bind(this);
		// this.onAppDelete = this.onAppDelete.bind(this);
	}
	list() {
		var url = "http://211.104.174.163:8079/app/";
		axios
			.get(url)
			.then((responseDate) => {
				console.log(responseDate);
				this.setState({
					deptData: responseDate.data,
				});
			})
			.catch((error) => {
				console.log("error");
			});
	}
	componentDidMount() {
		this.list();
	}
	render() {
		//render 함수 안의 프로그램 코드 작성
		return (
			//html
			<div>
				<h1>App components</h1>
				<DeptList deptData={this.state.deptData} />
				{/* 2. 컴포넌트 include */}
			</div>
		);
	}
}

export default App;