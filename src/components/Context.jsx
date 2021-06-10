import React, { useContext } from 'react'
import Value from '../App'
const Context = () => {
    const parentData = useContext(Value)
    console.log('inside child', Value)
    return (
        <>
            <pre>{JSON.stringify(parentData, null, 2)}</pre>
        </>
    )
}

export default Context
