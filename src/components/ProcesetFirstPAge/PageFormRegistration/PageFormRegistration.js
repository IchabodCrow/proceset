import React, {Component} from "react";
import Input from "../../UI/Input/Input";
import body from "../ProcesetFirstPage.module.css";
import Button from "../../UI/Button/Button";
import {Link, Route} from "react-router-dom";
import { reduxForm } from "redux-form";
import RegForm from "./RegForm/RegForm"
import SettingsPage from "../../BackgroundPage/SettingsPage/SettingsPage";
import history from "../../history/history";



export default class PageFormRegistration extends Component {
   
   
    render() {
        return (
           <>
            <div>Регистрация</div>
                <RegForm/>
           
           </>
        )
    }
}
