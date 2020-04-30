import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Button from "../../UI/Button/Button";
import myInput from "../../UI/Input/Input";
import { Link } from "react-router-dom";
import { matchInput, passLength, email, required } from "../utils/validators";

import layoutCss from "../../layouts/PublicLayout/index.module.css";

const passwordValidator = passLength(8);

const place = {
  name: "Enter name",
  surname: "Enter surname",
  email: "Enter email ",
  password: "Enter password",
  repPas: "Repeat password",
};

let RegistrationForm = (props) => {
  const { handleSubmit } = props;

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
        validate={[required]}
        placeholder={place.surname}
        className={layoutCss.field}
      />
      <Field
        name="email"
        type="text"
        component={myInput}
        validate={[email]}
        placeholder={place.email}
        className={layoutCss.field}
      />
      <Field
        name="passwordField"
        type="password"
        component={myInput}
        validate={[passwordValidator]}
        placeholder={place.password}
        className={layoutCss.field}
      />
      <Field
        name="repPas"
        type="password"
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
};

RegistrationForm = reduxForm({
  form: "regForm",
})(RegistrationForm);

export default RegistrationForm;
