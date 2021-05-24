import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            message : 'Hello Krish'
        }
    }
    clickHandler = () =>{
        this.setState( {
            message : 'Hello Krish Kashiwala'
        })
    }
    render() {
        return (
            <div>
                    <h1>{this.state.message}</h1>
                    <button onClick = {this.clickHandler}>Click</button>
            </div>  
        )
    }
}

export default EventBind
