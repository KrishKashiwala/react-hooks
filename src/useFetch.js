import {useState , useEffect} from 'react'
 const useFetch = (url) => {
    const [state , setState] = useState({data : null , loading : true})
    useEffect(() =>{
        setState(state => ({data : state.data , loading : true}));
        fetch(url).then(res => res.text()).then(y => setState({data : y , loading : false}))
    } , [url ,setState])

    return state;
}   
export default useFetch;