import React, { Component } from 'react';


// const SuperAdminsComponent =(OriginalComponent)=>{
//     class NewComponent extends Component {

        
//         render() {
//             return (
//                 <div>
//                     <p>This is class baesd information..</p>
//                    { console.log(this.props) }
//                    {console.log({...this.props})}
//                     <OriginalComponent {...this.props} />
//                 </div>
//             );
//         }
//      }
    
//     return NewComponent

// }
//or

    const SuperAdminsComponent =(OriginalComponent)=>{
    return(props)=>(
        <div>
                         <p>This is functional information..</p>
                       { console.log(props) }
                        {console.log({props})}
                         <OriginalComponent {...props} />
                     </div>
    )
    }





export default SuperAdminsComponent;