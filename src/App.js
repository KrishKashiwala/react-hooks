import React , {useState  , useRef}   from 'react'
import { useForm } from './useForm';
// import {useFetch} from './useFetch'
import Hello from './Hello'

const App = () =>{
    const [values, handleChange] = useForm({ email: "", password: "" });
    // const {data, loading} = useFetch('http://numbersapi.com/43/trivia')
    const inputRef = useRef();
    const [showHello , setShowHello] = useState(true);
    // for localStorage we need to use localStorage.setItem()....
        // const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
        // useEffect(() => {
        //     localStorage.setItem('count',JSON.stringify(count));
        // } , [count])
    return (
        <>  

            {/* <h1>{loading ? 'loading...' : data}</h1>
            <h1>{count}</h1>
            <button onClick = {() => {
                setCount(count+1);
            }}>Increase</button> */}
            <button onClick  = {() => {
                setShowHello(!showHello)
            }}>Toggle</button>
            {showHello && <Hello />}
            <button onClick = {() => {
                console.log(inputRef.current.focus())
            }}>Focus</button>
            <input type = "text" ref= {inputRef} name="email" value = {values.email} onChange = {handleChange}/>
            <input type = "password" name="password" value = {values.password} onChange = {handleChange}/>
        </>
    )    
}
export default App;