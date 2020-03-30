import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import regForm from './RegForm.module.css'
import { matchInput, passLength, email, required} from '../../../utils/validators'

import RegMutation from '../../../queries/signup'
import Button from '../../../UI/Button/Button'
import myInput from '../../../UI/Input/Input'
import { withMutation } from "react-apollo";


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
                name='firstName'
                type='text'
                component={myInput}
                validate={[required]}
                placeholderText='Введите имя'
            />
             <Field 
                name='secondName'
                type='text'
                component={myInput}
                validate={[required]}
                placeholderText='Введите фамилию'
            />
            <Field 
                name='email'
                type='text'
                component={myInput}
                validate={[email]}
                placeholderText='Введите email'
            />
            <Field 
                name='passwordField'
                type='password'
                component={myInput}
                validate={[passwordValidator]}
                placeholderText='Введите пароль'
            />
            <Field 
                name='repPas'
                type='password'
                component={myInput}
                validate={[matchInput]}
                placeholderText='Повторите пароль'
            />
            <Button
                onClick={this.Click}
                className={regForm.button}>Применить и войти
            </Button>
  
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

