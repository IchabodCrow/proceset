import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {ReactComponent as LogoSvg} from '../../resources/Vector.svg';
import body from './ProcesetFirstPage.module.css'


import RegForm from "./PageFormRegistration/RegForm/RegForm";
import LoginForm from "./PageFormIn/LoginForm/LoginForm";


export default class ProcesetFirstPage extends Component {
   
    render() {
        return (
            <div>
               
                    <div className={body.body}> </div>
                    <div className={body.logo}>
                        <LogoSvg/>
                    </div>
                    <div className={body.form}>
                
                        
                    </div>
               
            </div>
        )
    }

}