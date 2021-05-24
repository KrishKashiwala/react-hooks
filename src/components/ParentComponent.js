import React, { Component } from 'react'
import Childcomponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'
      }
    }
    greetParent = (props) =>{
        alert(`Hello ${this.state.parentName} ${props}`)
    }
    
  render() {
    return (
      <>    
            <Childcomponent greetHandler = {this.greetParent}/>
      </>
    )
  }
}

export default ParentComponent
