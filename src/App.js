import React , {useEffect, useState}  from 'react'


import { useForm } from './useForm';
import useFetch from './useFetch'
const App = () =>{
    const[values , handleValues] = useForm({email : '' , password : ''})
    const [count , setCounter] = useState(0);
    const {data} = useFetch(`http://numbersapi.com/${count}/trivia`)
    
    // useEffect (() =>{

    //     const onMouseMove = e => {
    //         console.log(e);
    //     }
    //     window.addEventListener('mousemove' , onMouseMove)
    //     return () => {
    //         window.removeEventListener("mousemove" , onMouseMove)
    //     }
    
    // } , []);
    
    return (
        <>      
            {/* <button onClick = {() => setToggleValue(!toggleValue)}>Toggle</button>
            {toggleValue && <Hello/>} */}
            
            <h1>{!data ? "Loading..." : data}</h1>
            <button onClick  = {() =>setCounter(count+1)}>Increment</button>
            
            <input type="text" name = "email" value = {values.email} onChange = { handleValues}/>
            <input type="number" name = "password" value = {values.password} onChange = {handleValues}/>
            <h1>{values.email} {values.password}</h1>
            
        </>
    )    
}
export default App;
