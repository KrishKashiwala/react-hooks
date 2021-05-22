import React   , {useState , useEffect} from 'react';
function UseFetch(url) {
    const [count , setCount] = useState(0)
    const [data , setData]  = useState(null)
    const [loading , setLoading] = useState(true)
    useEffect(() =>{
        document.title = `You clicked ${count} times`
        async function onload(){
        const res = await fetch("https://api.randomuser.me/")
        const data  =  await res.json();
        const item = data.info;
        setData(item)
        setLoading(false)
        }
        onload();
    } ,[count, url] )
  return (
    <>
            <button onClick = {() => setCount(count+1)}>Click {count} times</button>
            
            {loading ? '...loading' :<h1>{data.seed}</h1>}  
            
    </>
  );
}
export default UseFetch;
