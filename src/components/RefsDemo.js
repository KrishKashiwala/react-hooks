import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
       super(props)
        this.inputRef =  React.createRef();
        this.cbRef = null;
        this.setcbref = e =>{
            this.cbRef = e;
        }
       this.state = {
          
       }
     }
     componentDidMount(){
         if(this.cbRef){
            this.cbRef.focus();
         }
        //  console.log(this.cbRef)
     }
     handler = () =>{
         prompt(this.inputRef.current.value);
     } 
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputRef}/>
                <input type="text" ref = {this.setcbref}/>
                <button onClick = {this.handler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
