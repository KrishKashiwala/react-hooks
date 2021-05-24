import React from 'react'

export default function ChildComponent({greetHandler}) {
    return (
        <div>
            <button onClick = {() =>  greetHandler('child')}>Greet Parent!</button>
        </div>
    )
}
