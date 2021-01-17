import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        // 화면 구현 부분 template
        return (
            <div>
                Contact Component
            </div>
        )
    }
}
// export default Contact;  // 생략 export class로 변경 

// ------------ Contact2에는 info()함수와 render()함수가 있는거 
export class Contact2 extends Component {
    info() {
        return (
            <div>
                Contact2 Component
            </div>
        )
    }
    render(){
        // return 부분이 화면에 랜더링 
        return this.info();
    }
}
// export default Contact2;  // 생략 export class로 변경 
