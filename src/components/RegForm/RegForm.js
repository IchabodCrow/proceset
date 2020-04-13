import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import { withMutation } from "react-apollo";

import layoutCss from "../../layouts/PublicLayout/index.module.css"
import { matchInput, passLength, email, required} from '../utils/validators'
import RegMutation from '../queries/signup'
import Button from '../../UI/Button/Button'
import myInput from '../../UI/Input/Input'

import history from '../history/history'
import { Link } from 'react-router-dom';


const passwordValidator = passLength(8);


class RegForm extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

  }

    handleSubmit(fields) {
      const { mutate } = this.props;

      return new Promise((resolve, reject) => {
        mutate({
          variables: {
            firstName: fields.firstName,
            secondName: fields.secondName,
            email: fields.email,
            password: fields.passwordField
          }
        })
        .then(res => {
          localStorage.setItem('token', res.data.signup)
          resolve(res);
          history.push("/setting")

        })
          .catch(e => {
            reject(new SubmissionError({ _error: e?.message }));
          });
   });
  }

    render(){

      const place = {
          name: "Enter name",
          surname: "Enter surname",
          email: "Enter email ",
          password: "Enter password",
          repPas: "Repeat password",
      }
        return (
            <div>
              
              <form
                  className={layoutCss.form}
                  onSubmit={this.props.handleSubmit(this.handleSubmit)}
              >
              <div className={layoutCss.head}>Регистрация</div>
              <Field
                  name='firstName'
                  type='text'
                  component={myInput}
                  validate={[required]}
                  placeholder={place.name}
                  className={layoutCss.field}
              />
               <Field
                  name='secondName'
                  type='text'
                  component={myInput}
                  validate={[required]}
                  placeholder={place.surname}
                  className={layoutCss.field}
              />
              <Field
                  name='email'
                  type='text'
                  component={myInput}
                  validate={[email]}
                  placeholder={place.email}
                  className={layoutCss.field}
              />
              <Field
                  name='passwordField'
                  type='password'
                  component={myInput}
                  validate={[passwordValidator]}
                  placeholder={place.password}
                  className={layoutCss.field}
              />
              <Field
                  name='repPas'
                  type='password'
                  component={myInput}
                  validate={[matchInput]}
                  placeholder={place.repPas}
                  className={layoutCss.field}
              />
              <Button
                  className={layoutCss.button}>Применить и войти
              </Button>
              <Link className={layoutCss.link} exact to="/"> Вернуться</Link>

          </form>

          {this.props.error ? <span>{this.props.error}</span> : null}
        </div>
        )
    }
}
const connectedToReduxForm = reduxForm({
  form: "regForm",
});



export default withMutation(RegMutation)(connectedToReduxForm(RegForm))

