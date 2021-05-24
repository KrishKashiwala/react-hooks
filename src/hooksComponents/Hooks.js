import React , {useReducer}from 'react'
const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'in' :
             return state + 1
        case 'de' :
             return state -1
        case 're' : 
        return initialState
        default : 
         return state
    }
}
function Hooks() {
    const [count , dispatch] = useReducer(reducer , initialState)
    const [countTwo , dispatchTwo] = useReducer(reducer , initialState)
    return (    
        <div>
           <h1>Count  -  {count}</h1> 
           <h1>Count2 - {countTwo}</h1>

           <button onClick
            = {() => dispatchTwo('in')}>Increment2</button>
           <button onClick = {() => dispatchTwo('de')}>Decrement2</button>
           <button onClick = {() => dispatchTwo('re')}>Reset Value2</button>
           <button onClick
            = {() => dispatch('in')}>Increment</button>
           <button onClick = {() => dispatch('de')}>Decrement</button>
           <button onClick = {() => dispatch('re')}>Reset Value</button>
        </div>
    )
 }

export default Hooks
