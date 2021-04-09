import React , {useRef} from 'react'

const Hello = () => {
    const renders  = useRef(0);
    console.log(`hello ${renders.current++}`);
    return (
        <div>
            hello world
        </div>
    )
}


export default Hello;