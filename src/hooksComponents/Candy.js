import React, { useState }   from 'react'

function Candy() {
    const initialCandy = ["Snicker" , "Dairy Milk" , "perk" , "5-star"]
    const [candies , setCandies] = useState(initialCandy)
    const handle = candy =>{
        setCandies(all => all.filter
            (c => c!==candy))
    }
    return (
        <div>
                    {
                        candies.length ===0 ? (
                            <button onClick = {() => (
                                setCandies(initialCandy)
                            )}>Refill it </button>
                        ):(candies.map(res => (
                            <ul> <button onClick = {() => handle(res)}>GRab it </button><li key = {res}> {res}</li></ul>
                        )))
                    }               
        </div>
    )
}

export default Candy

