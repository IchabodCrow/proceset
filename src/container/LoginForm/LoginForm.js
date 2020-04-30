import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import { withMutation, graphql, DataProps } from "react-apollo";
import layoutCss from "../../layouts/PublicLayout/index.module.css"
import LoginMutation from '../../components/queries/loginMutation'
import Button from '../../UI/Button/Button'
import myInput from '../../UI/Input/Input'
import history from '../../components/history/history'
import { Link } from 'react-router-dom';



class LoginForm extends React.Component {
    constructor(props){
      super(props)
      this. handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(fields) {

      const { mutate } = this.props;

      return new Promise((resolve, reject) => {
        mutate({
          variables: {
            email: fields.email,
            password: fields.passwordField
          }
        })
        .then(res => {
          resolve(res);
          history.push("/setting")
        })
          .catch(e => {
            reject(new SubmissionError({ _error: e?.message }));
          });
   });
  }

    render(){

        return (
          <div>

            <form
                className={layoutCss.form}
                onSubmit={this.props.handleSubmit(this.handleSubmit)}
            >
              <Field
                  name='email'
                  type='text'
                  component={myInput}
                  placeholder='Введите email'
                  className={layoutCss.field}
              />
              <Field
                  name='passwordField'
                  type='password'
                  component={myInput}
                  placeholder='Введите пароль'
                  className={layoutCss.field}
              />
              
               <Button className={layoutCss.button}>Войти в систему</Button>
             
              
              <Link className={layoutCss.link} to="/registration">Зарегестрироваться</Link>
            </form>
          </div>
        )
    }
}
const connectedToReduxForm = reduxForm({
  form: "loginForm",
});



export default withMutation(LoginMutation)(connectedToReduxForm(LoginForm))


