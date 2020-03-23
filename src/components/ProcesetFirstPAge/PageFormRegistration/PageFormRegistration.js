import React, {Component} from "react";
import Input from "../../UI/Input/Input";
import body from "../ProcesetFirstPage.module.css";
import Button from "../../UI/Button/Button";
import {NavLink} from "react-router-dom";
import { reduxForm } from "redux-form";
import LoginForm from "../LoginForm/LoginForm";


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

    render() {
        return (
           <>
            <div>Регистрация</div>
                <LoginForm 
                    onSubmit={this.submit}
                    initialValues={this.getInitialValues()}
                />
            <div>Уже зарегестрированы?</div><NavLink to="/form">Вернуться</NavLink>
           </>
        )
    }
}
