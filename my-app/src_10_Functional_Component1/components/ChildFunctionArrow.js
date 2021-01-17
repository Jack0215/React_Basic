import React from 'react';
                //화살표함수로 props를 매개변수로 넘겨줌
const ChildFunctionArrow = (props) => {
    return (
        <div>
            <h3>함수형 Arrow 컴포넌트 (Function Arrow Component)</h3>
            props:{props.mesg}
        </div>
    );
};

export default ChildFunctionArrow;