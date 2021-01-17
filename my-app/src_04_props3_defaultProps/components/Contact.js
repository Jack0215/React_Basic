import React, { Component } from 'react';

export class Contact extends Component {
    render() {
        let {mesg:a, mesg2:b} = this.props; //t.p에는 mesg, mesg2가 담겨있음
        //mesg, mesg2 변수명을 각각 a와b로 변경
        return (
            <div>
                <h1>{a}</h1>
                <h1>{b}</h1>
            </div>
        );
    }
}//end class
//클래스 바깥에서 기본값 클래스명.defaultProps 설정
Contact.defaultProps={
    mesg:"유관순",
    mesg2:"20"
}

//export default Contact;