import React, {Component} from "react";
import Input from "../../UI/Input/Input";
import body from "../ProcesetFirstPage.module.css";
import Button from "../../UI/Button/Button";
import {NavLink} from "react-router-dom";
import { reduxForm } from "redux-form";
import LoginForm from "../LoginForm/LoginForm";


export default class PageFormRegistration extends Component {
    
  

    render() {
       

        return (
           <>
            <div>Регистрация</div>
                <LoginForm 
                    str='str'
                />
            <div>Уже зарегестрированы?</div><NavLink to="/form">Вернуться</NavLink>
           </>
        )
    }
}
