import React, { Component } from "react";
import body from "../ProcesetFirstPage.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";

export default class PageFormIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        <Input placeholderText={placeholder.name} />
        <Input type={type.inputPas} placeholderText={placeholder.pas} />
        <Button className={body.button}>Войти в систему</Button>
        <NavLink to="/registration">Регистрация</NavLink>
      </div>
    );
  }
}
