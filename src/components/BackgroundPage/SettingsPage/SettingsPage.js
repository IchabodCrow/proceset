import React, { Component } from "react";
import setting from "./SettingsPage.module.css";
import { Field, reduxForm, SubmissionError } from "redux-form";
import InputWithText from "../../UI/InputWithText/InputWithText";
import Button from "../../UI/Button/Button";
import { withMutation } from "react-apollo";
import {
  matchInput,
  passLength,
  email,
  required,
} from "../../utils/validators";

import editUser from "../../queries/editUser";

const passwordValidator = passLength(8);

class SettingPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const [addTodo] = useMutation (
  //   currentUser
  // )

  handleSubmit(fields) {
    const { mutate, data } = this.props;
    localStorage.getItem("token");
    console.log(data);
    return new Promise((resolve, reject) => {
      mutate({
        variables: {
          firstName: fields.firstName,
          secondName: fields.secondName,
          email: fields.email,
          password: fields.passwordField,
        },
      })
        .then((res) => {
          // localStorage.setItem('token', res.data.signup)
          resolve(res);
        })
        .catch((e) => {
          reject(new SubmissionError({ _error: e?.message }));
        });
    });
  }

  render() {
   
    const text = {
      name: "Имя",
      surName: "Фамилия",
      email: "Электронная почта",
      newPas: "Новый пароль",
      rePas: "Повторите пароль",
    };
    const type = {
      pas: "password",
      email: "email",
    };
    const place = {
      name: "Enter name",
      email: "Enter email ",
      password: "Enter password",
      repPas: "Repeat password",
    };

    return (
      <div className={setting.box}>
        <div className={setting.subtitle}>
          <div className={setting.userName}>{}. Редактирование</div>
          <Button className={setting.button} onClick={this.Click}>
            Сохранить
          </Button>
        </div>
        <form
          className={setting.container}
          onSubmit={this.props.handleSubmit(this.handleSubmit)}
        >
          <Field
            name="firstName"
            type="text"
            component={InputWithText}
            validate={[required]}
            placeholder="Введите имя"
            inputText={text.name}
          />
          <Field
            name="secondName"
            type="text"
            component={InputWithText}
            validate={[required]}
            placeholder="Введите фамилию"
            inputText={text.surName}
          />
          <Field
            name="email"
            type="text"
            component={InputWithText}
            validate={[email]}
            placeholder="Введите email"
            inputText={text.email}
          />
          <Field
            name="passwordField"
            type="password"
            component={InputWithText}
            validate={[passwordValidator]}
            placeholder="Введите пароль"
            inputText={text.newPas}
          />
          <Field
            name="repPas"
            type="password"
            component={InputWithText}
            validate={[matchInput]}
            placeholder="Повторите пароль"
            inputText={text.rePas}
          />
        </form>
      </div>
    );
  }
}

const connectedToReduxForm = reduxForm({
  form: "settingForm",
});

export default withMutation(editUser)(connectedToReduxForm(SettingPage));
