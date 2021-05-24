import React from 'react'

const FunctionComponent = () =>  {
    function clickHandler(e){
        console.log(e);
    }
    return (
        <div>
            <button onClick = {() => clickHandler}>Click</button>

        </div>
    )
}

export default FunctionComponent;
