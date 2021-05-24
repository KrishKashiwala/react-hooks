import React, { Component } from 'react'

 class Forms extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username : '',
          framework : '',
          toggle : ''
       }
     }
    changeHandler = (e) => {
        this.setState({
            username : e.target.value
           
        })
    }
    changeOption = (e) =>{
        
        // if(e.keyCode === 13){
        //     e.preventDefault();
        //     console.log('entered')
        //     alert('thanks for entering details')
        // }
        this.setState({
                framework : e.target.value,
                toggle : `Your username is ${this.state.username} and Framework is ${this.state.framework}`
        })
    }
 
    render() {
        
        return (
            <div>
                  
                  <label htmlFor="user">Username</label> 
                  <input type="text" name="name" value = {this.state.username} onChange = {this.changeHandler} id="user"/>
                  <br/>
                  <label htmlFor="frame">Framework</label>
                  <select name="FrameWork" id="frame">
                      <option value="React">React</option>
                      <option value="Angular">Angular</option>
                      <option value="Vue">Vue</option>
                  </select>
                  <br/>
                  <button type="submit" onClick = {this.changeOption}>Submit</button>
                  <h1>{this.state.toggle}</h1>
            </div>
        )
    }
}

export default Forms
