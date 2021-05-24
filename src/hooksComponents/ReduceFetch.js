import React , {useEffect, useReducer} from 'react'
import axios from 'axios'
const initialState = {
    load : true,
    error : '',
    posts : {}
}
const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_SUCCESS" :
            return{
                load : false,
                posts : action.payload,
                error : '',
        }
        case "ERROR" :
            return {
                load : false,
                posts : {},
                error : 'something went wrong'
            }
        default : 
        return state
    }
}
function ReduceFetch() {

    const [data , dispatch] = useReducer(reducer , initialState)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
            dispatch({type : "FETCH_SUCCESS" , payload : res.data})
        }).catch(res => dispatch({type : "ERROR"}))
    } )
    return (
        <div>
        {data.load ? "Loading..." :  data.posts.title}
        {data.error ? "something went wrong" : null}
        </div>
    )
}

export default ReduceFetch
