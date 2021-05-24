import React  , {useEffect , useState}from 'react'

function EffectDepth() {
    const  [count , setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(count +1) 
        } , 1000)
        return () => {
            clearInterval()
        }
    },[count])
    return (
        <div>
           {count} 
        </div>
    )
} 

export default EffectDepth
