import React, { Component } from "react";
import setting from "./SettingsPage.module.css";

import InputWithText from "../../UI/InputWithText/InputWithText";
import Button from "../../UI/Button/Button";

export default class SettingPage extends Component {

  

  render() {
    const text = {
      name: "Имя",
      surName: "Фамилия",
      email: "Электронная почта",
      newPas: "Новый пароль",
      rePas: "Повторите пароль"
    };
    const type = {
      pas: "password",
      email: "email"
    };

    return (
      <div className={setting.box}>
        <div className={setting.subtitle}>
          <div className={setting.userName}>{localStorage.getItem('firstName  ' )}. Редактирование</div>
          <Button className={setting.button}>Сохранить</Button>
        </div>
        <div className={setting.container}>
          <InputWithText inputText={text.name} />
          <InputWithText inputText={text.surName} />
          <InputWithText type={type.email} inputText={text.email} />
          <InputWithText type={type.pas} inputText={text.newPas} />
          <InputWithText type={type.pas} inputText={text.rePas} />
        </div>
      </div>
    );
  }
}
