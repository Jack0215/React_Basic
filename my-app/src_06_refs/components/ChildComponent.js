import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.userid = React.createRef();
    this.passwd = React.createRef();
  }

  submit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(this.userid.current.value, this.passwd.current.value);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        아이디 <input type="text" ref={this.userid} />
        <br />
        비밀번호 <input type="text" ref={this.passwd} />
        <br />
        <button>로그인</button>
      </form>
    );
  }
}

export default Child;