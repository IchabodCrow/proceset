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
  
    return (
      <div className={body.formContent}>
        
       <LoginForm/>
        <Link to="/registration">Регистрация</Link>
      </div>
    );
  }
}
