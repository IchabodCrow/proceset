import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import regForm from '../../PageFormRegistration/RegForm/RegForm.module.css'

import { withMutation } from "react-apollo";
import LoginMutation from '../../../queries/loginMutation'

import Button from '../../../UI/Button/Button'
import myInput from '../../../UI/Input/Input'
import history from '../../../history/history'


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
                className={regForm.formContent}
                onSubmit={this.props.handleSubmit(this.handleSubmit)}
            >
            <Field 
                name='email'
                type='text'
                component={myInput}
                placeholderText='Введите email'
            />
            <Field 
                name='passwordField'
                type='password'
                component={myInput}
                placeholderText='Введите пароль'
            />
            <Button
               
                className={regForm.button}>Войти в систему
            </Button>
  
        </form>

      
        </div>
        )
    }
}
const connectedToReduxForm = reduxForm({
  form: "loginForm",
});



export default withMutation(LoginMutation)(connectedToReduxForm(LoginForm))


