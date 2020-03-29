import React, {Component} from "react";
import Input from "../../UI/Input/Input";
import body from "../ProcesetFirstPage.module.css";
import Button from "../../UI/Button/Button";
import {NavLink} from "react-router-dom";
import { reduxForm } from "redux-form";
import RegForm from "./RegForm/RegForm"
import ErrorMessage from "../../ErrorMessage/ErrorMessage";


export default class PageFormRegistration extends Component {

    
//   submit = input=>{
//     if(['Yurii', 'Alex', 'Mike', 'Sveta'].includes (input.username)){
//       throw new SubmissionError ({
//         username : "Username already taken",
//       });
//     }else{
//       window.alert (JSON.stringify(input))
//     }
// };
    
  getInitialValues(){
      return {
          username: "Юрчик",
          password: "",
      };
  }

    submit = (values) => {
        console.log('Value from submit',values);
    }

    render() {
        return (
           <>
            <div>Регистрация</div>
                <RegForm 
                    onSubmit={this.submit}
                    initialValues={this.getInitialValues()}
                />
           </>
        )
    }
}
