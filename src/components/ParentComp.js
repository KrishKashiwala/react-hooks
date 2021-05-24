import React, { Component} from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Krish Kashiwala'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Krish Kashiwala'
            })
        },2000)
    }
    
    render() {
        return (
            <div>
                ParentComponent
                <RegularComp name = {this.state.name}/>
                <PureComp name = {this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
// she is used for parent component to not to re-render again and again even if the value does not changes.