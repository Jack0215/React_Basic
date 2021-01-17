import React from 'react'

export function ChildFunction(props) {
    console.log(props);
    const {mesg, mesg2}=props;
    return (
        <div>
            <h3>함수형 컴포넌트(Fuunction Component)</h3>
            props : {mesg} <br/>
            props2: {mesg2}<br/>
        </div>
    )
}

