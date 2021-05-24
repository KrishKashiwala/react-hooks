import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        
            console.log('button clicked with settimeout')
    }

    render() {
        return (
            <div>
                    <button onClick = {this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick
