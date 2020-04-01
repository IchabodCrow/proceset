import React, { Component } from "react";
import body from "../ProcesetFirstPage.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import LoginForm from '../PageFormIn/LoginForm/LoginForm'
import history from "../../history/history";

export default class PageFormIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const placeholder = {
      name: "Введите имя",
      pas: "Введите пароль"
    };

    const type = {
      inputPas: "password"
    };

  
    return (
      <div className={body.formContent}>
        
       <LoginForm/>
        <Link to="/registration">Регистрация</Link>
      </div>
    );
  }
}
