import React, {Component} from "react";
import setting from "../../BackgroundPage/SettingsPage/SettingsPage.module.css";
import Input from "../Input/Input";

export default class InputWithText extends Component {
    render(props) {
        return (
            <div className={setting.textAndInput}>
                <span className={setting.text}>{this.props.inputText}</span>
                <div className={setting.input}><Input type={this.props.type}/></div>
            </div>
        )
    }
}