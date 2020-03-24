import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import regForm from './LoginForm.module.css'
import {validate, onlyEmail, passValid, matchInput, passLength} from '../../utils/validators'
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux"
import { incAction } from "../../store/index.reducers";


import Button from '../../UI/Button/Button'
import myInput from '../../UI/Input/Input'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'
import { NavLink } from 'react-router-dom'




const server = new Promise((resolve, reject) => {
 
    resolve({
      data: {
        user: "Vasya"
      }
    });
  });

  const passwordValidator = passLength(8);

class LoginForm extends React.PureComponent {
   
    handleSubmit(fields) {
        console.warn(fields);
        return new Promise((resolve, reject) => {
          server
            .then(res => {
              resolve(res);
            })
            .catch(e => {
              reject(new SubmissionError({ _error: "Что-то пошло не так" }));
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
                name='loginField'
                type='text'
                component={myInput}
                placeholderText='Введите имя'
            />
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
            {error && (<div class="мой-охеренный-красный-класс">{error}</div>)}
        </div>
        )
    }
}
const connectedToReduxForm = reduxForm({
  form: "loginForm",
  validate: validate
});

const mapStateToProps = state => {
    return {
      count: state?.count,
      initialValues: {
        loginField: "",
        
      }
    };
  };
  

  const ConnectedLogin = connect(
  mapStateToProps,
)(connectedToReduxForm(LoginForm));



export default ConnectedLogin

