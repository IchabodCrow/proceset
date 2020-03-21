import React, { Component } from "react";
import back from './BackgroundPage.module.css';


import SettingPage from "./SettingsPage/SettingsPage";
import Menu from "./Navigation/Menu/Menu";
import Drower from "./Navigation/Drower/Drower";

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
                <SettingPage/>
            </>
        )
    }
}