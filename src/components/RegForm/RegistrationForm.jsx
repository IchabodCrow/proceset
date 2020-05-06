import React from "react";
import { Field, reduxForm} from "redux-form";
import Button from "../../UI/Button/Button";
import myInput from "../../UI/Input/Input";
import { Link } from "react-router-dom";
import { matchInput, passLength, email, required, requiredSec, requiredEmail } from "../utils/validators";
import {ReactComponent as Eye} from '../../resources/closeEye.svg';
import layoutCss from "../../layouts/PublicLayout/index.module.css";
import {memoize} from "lodash"

const passwordValidator = passLength(8);

const place = {
  name: "Enter name",
  surname: "Enter surname",
  email: "Enter email ",
  password: "Enter password",
  repPas: "Repeat password",
};

class RegistrationForm extends React.Component {
  constructor(props){
    super(props)

    this.handleTogglePassword = this.handleTogglePassword.bind(this)


  }
  state = {
    eyeIcon: {
      passwordField: false,
      repPas: false,
    }
    
  };

  handleTogglePassword =memoize(field => () => {
    const {eyeIcon} = this.state
    this.setState ({
      ...this.state,
      eyeIcon: {
        ...eyeIcon,
        [field] : !eyeIcon[field]
      }
    })
  });

  render() {
    const { handleSubmit } = this.props;
    const {eyeIcon} = this.state;
    return (
      <form className={layoutCss.form} onSubmit={handleSubmit}>
        <div className={layoutCss.head}>Регистрация</div>
        <Field
          name="firstName"
          type="text"
          component={myInput}
          validate={[required]}
          placeholder={place.name}
          className={layoutCss.field}
        />
        <Field
          name="secondName"
          type="text"
          component={myInput}
          validate={[requiredSec]}
          placeholder={place.surname}
          className={layoutCss.field}
        />
        <Field
          name="email"
          type="text"
          component={myInput}
          validate={[email,requiredEmail]}
          placeholder={place.email}
          className={layoutCss.field}
        />
         <button onClick={this.handleTogglePassword('passwordField')} className={layoutCss.butEye}><Eye className={layoutCss.eyeIconReg1}/></button>
        <Field
          name="passwordField"
          type={eyeIcon.passwordField ? "text" : "password"}
          component={myInput}
          validate={[passwordValidator]}
          placeholder={place.password}
          className={layoutCss.field}
        />
         <button onClick={this.handleTogglePassword('repPas')} className={layoutCss.butEye}><Eye className={layoutCss.eyeIconReg2}/></button>
        <Field
          name="repPas"
          type={eyeIcon.repPas ? "text" : "password"}
          component={myInput}
          validate={[matchInput]}
          placeholder={place.repPas}
          className={layoutCss.field}
        />
        <Button className={layoutCss.button}>Применить и войти</Button>
        <Link className={layoutCss.link} exact to="/">
          {" "}
          Вернуться
        </Link>
      </form>
    );
  }
}

RegistrationForm = reduxForm({
  form: "regForm",
})(RegistrationForm);

export default RegistrationForm;
