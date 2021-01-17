import React from 'react'

export function ChildFunction(props) {
    console.log(props);
    return (
        <div>
            <h3>함수형 컴포넌트(Fuunction Component)</h3>
            props : {props.mesg}
        </div>
    )
}

