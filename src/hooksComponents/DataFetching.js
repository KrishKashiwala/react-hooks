import React ,{useState , useEffect  , useContext} from 'react'
import axios from 'axios'
import {UserContext} from '../App'
function DataFetching() {
    const val = useContext(UserContext);
    const [posts , setPosts] = useState('')
    const [id , setId] = useState('')
    const [tog , setTog] = useState(false)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            console.log(res)
            setPosts(res.data)
            setTog(false)
        })
    }  , [id]) 
    return (
        <div>
    <input type="text" value = {id} onChange = {(e) => 
            setId(e.target.value)
           }/>     
    {/* {posts.map(res => (
        <div>{res}</div>
    ))}   */}
           <button onClick = {() => 
               setTog(true)
           }>Fetch id data!</button> 
             
         {tog &&   <div>{posts.title}</div>}
         <h1>{val}</h1> 
        </div>
    )
}

export default DataFetching
