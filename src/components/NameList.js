import React from 'react'
import Person from './Person'
function NameList() {

            const arr = [{
                id: '1',
                Name : 'Krish Kashiwala'
            }]
            const arrList = arr.map((res) => <Person key = {res.id} person = {res}/>)
    return (
        <div>
           
            {arrList}
        </div>
    )
}

export default NameList
