import React,{useEffect, useState} from 'react'

function ClassCounter() {
    const[x , setX] = useState(0)
    const[y , setY] = useState(0)
    const logMouse = (e) =>{
        console.log("Mouse event occurred")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove' , logMouse)
        return () => {
            console.log("component unmounted");
            window.removeEventListener('mousemove' , logMouse)
        }
    } , [x , y])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default ClassCounter
