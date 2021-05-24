import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>Hello {person.Name} and my ID is {person.id}</h1>
        </div>
    )
}

export default Person
