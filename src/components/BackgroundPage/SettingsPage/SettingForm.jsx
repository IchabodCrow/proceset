import React from "react";
import { Field, reduxForm} from "redux-form";
import Button from "../../UI/Button/Button";
import {useQuery} from 'react-apollo'

import setting from "./SettingsPage.module.css";
import InputWithText from "../../UI/InputWithText/InputWithText";
import {
  matchInput,
  passLength,
  email,
} from "../../utils/validators";
import { ReactComponent as Eye } from "../../../resources/closeEye.svg";
import { memoize } from "lodash";

const passwordValidator = passLength(8);

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


class SettingForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleTogglePassword = this.handleTogglePassword.bind(this);
  }
  state = {
    eyeIcon: {
      passwordField: false,
      repPas: false,
    },
  };

 
  handleTogglePassword = memoize((field) => () => {
    const { eyeIcon } = this.state;
    this.setState({
      ...this.state,
      eyeIcon: {
        ...eyeIcon,
        [field]: !eyeIcon[field],
      },
    });
  });

  render() {
 

const initialData = {
    firstName: this.props.data?.currentUser.firstName,
    secondName: this.props.data?.currentUser.secondName,
    email: this.props.data?.currentUser.email,
  };

    const { handleSubmit } = this.props;
    const { eyeIcon } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <div className={setting.subtitle}>
          <div className={setting.userName}>
            {`${this.props.data?.currentUser.firstName}` +
              " " +
              `${ this.props.data?.currentUser.secondName}`}
            . Редактирование
          </div>
          <Button className={setting.button}>Сохранить</Button>
        </div>
        <div className={setting.container}>
          <Field
            name="firstName"
            type="text"
            component={InputWithText}
            placeholder={this.props.data?.currentUser.firstName}
            inputText={text.name}
          />
          <Field
            name="secondName"
            type="text"
            component={InputWithText}
            placeholder={this.props.data?.currentUser.secondName}
            inputText={text.surName}
          />
          <Field
            name="email"
            type="text"
            component={InputWithText}
            validate={[email]}
            placeholder={this.props.data?.currentUser.email}
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
        </div>
      </form>
    );
  }
}

SettingForm = reduxForm({
  form: "settingForm",
})(SettingForm);

export default SettingForm;
