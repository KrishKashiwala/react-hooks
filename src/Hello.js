
import React , {useEffect}  from 'react'

// class  Hello extends Component{
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          isLoggedIn:false
//       }
//     }
    
//     render(){
//         if(this.state.isLoggedIn){
//             <div>
//                 hello Krish
//             </div>  
//         }
//     return (
//         <div>
//             <div>
//                 welcome react
//             </div>
//             <div>
//                 hello Krish
//             </div>  
//         </div>
//         )
//     }
// }
const Hello = () => {
useEffect (() =>{
    console.log('rendered');
    return (
        console.log('unmount')
    )

})
return(
    <div>hey</div>
)
}
export default Hello;