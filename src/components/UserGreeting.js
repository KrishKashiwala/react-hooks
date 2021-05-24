import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogged : false,
      }
    }
    
    render() {
        return(
            <>
            {this.state.isLogged && <h1>Welcome Krish Kashiwala</h1>}
            <h1>Nothing this chilling</h1>
            </>
        )
    }
}

export default UserGreeting
