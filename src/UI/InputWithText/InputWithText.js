import React, {Component} from "react";
import InpText from "./InputWithText.module.css"

// export default class InputWithText extends Component {
//     render(props) {
//         return (
//             <div className={setting.textAndInput}>
              
//                 <div className={setting.input}><input className={InpText.input} type={this.props.type}/></div>
//             </div>
//         )
//     }
// }

 class InputWithText extends Component {  
    render(props){
         return (
        <>
            <div className={InpText.textBox}> 
             <span className={InpText.text}>{this.props.inputText}</span>
             <input {...this.props.input} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder} 
                    className={InpText.input}
            ></input>

            </div>
         
               
            
        </>
       
        
    )
    }
   
}

export default InputWithText