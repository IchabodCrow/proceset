import React, { Component } from "react";
import back from './BackgroundPage.module.css';
import {Route, Router, BrowserRouter} from 'react-router-dom';
import ProcessList from "../ProcessList/ProcessList"
import SettingPage from "./SettingsPage/SettingsPage";
import Menu from "./Navigation/Menu/Menu";
import Drower from "./Navigation/Drower/Drower";
import Process from "./Process/Process";

export default class BackgroundPage extends Component{
constructor(props){
    super(props)

    this.state = {
        menu: false,
    }

    this.menuHandler = this.menuHandler.bind(this);
    this.menuCloseHandler = this.menuCloseHandler.bind(this);

}

    menuHandler() {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler() {
        this.setState({
            menu: false
        })
    }

    render(){
        return(
            <>
                <div className={back.background}></div>
                <div className={back.header}>
                   <Menu 
                   onToggle={this.menuHandler}
                   isOpen={this.state.menu}/>
                   <Drower
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}/>
                </div>
                {/* <Route path="/setting" render={() => <SettingPage/>}/>
                <Route path="/process" render={() => <ProcessList/>}/> */}
            </>
        )
    }
}