import React from 'react';

const ChildDestructuring = ({mesg, mesg2}) => {
   
    return (
        <div>
            <h3>함수형 컴포넌트 (Function Component) Destructuring</h3>
            props : {mesg}<br/>
            props2: {mesg2}<br/>
        </div>
    );
};

export default ChildDestructuring;