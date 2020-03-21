import React, {Component} from "react";
import Input from "../../UI/Input/Input";
import body from "../ProcesetFirstPage.module.css";
import Button from "../../UI/Button/Button";
import {NavLink} from "react-router-dom";

export default class PageFormRegistration extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const placeholder = {
            name: 'Введите имя',
            email: 'Введите email',
            pas: 'Введите пароль',
            rePas: 'Повторите пароль'

        };

        const type = {
            inputPas: 'password',
        };
        return (
            <div className={body.formContent}>
                <div>Регистрация</div>
                <Input placeholderText={placeholder.name}/>
                <Input placeholderText={placeholder.email}/>
                <Input type={type.inputPas} placeholderText={placeholder.pas}/>
                <Input type={type.inputPas} placeholderText={placeholder.rePas}/>
                <Button
                    className={body.button}>Применить и войти</Button>
                <div>Уже зарегестрированы?</div><NavLink to="/form">Вернуться</NavLink>
            </div>
        )
    }
}