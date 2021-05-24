import React, { Component } from 'react'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'Krish Kashiwala'
    }
    console.log('LifeCycle props')
  }
  static getDerivedStateFromProps(props , state){
    console.log('Lifecycle A getDerivedStateFromProps');
    return null
  }
  componentDidMount(){
    console.log('component did mount');
  }
  render() {
    console.log('Lifecycle rendered')
    return (
      <>
          
      </>
    )
  }
}

export default LifecycleA
