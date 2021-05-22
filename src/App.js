import React , {useState , useEffect} from 'react';
// import UseFetch from './UseFetch'
const API = (url) => {
    const [data , setData]  = useState(null)
    const [loading , setLoading] = useState(true)
    useEffect(() =>{
        async function onload(url){
        const res = await fetch(url)
        const data  =  await res.json();
        const item  = data.info;
        setData(item)
        setLoading(false)
        
        }
        onload(url);
    }, [url] )
    return {data , loading}
}
const App = () =>{
    
    
    const {data , loading} = API("https://api.randomuser.me/");
    return(
        <div>
                    <button>Fetch Seed</button>
                   
                    {loading ? '...loading' : <div>{data.seed}</div>}
        </div>
    )
}
export default App;