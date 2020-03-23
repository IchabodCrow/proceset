import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import regForm from './LoginForm.module.css'
import {formValidator, onlyEmail, passValid} from '../../utils/validators'
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux"
import { incAction } from "../../store/index.reducers";

import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'


const server = new Promise((resolve, reject) => {
 
    resolve({
      data: {
        user: "Vasya"
      }
    });
  });

class LoginForm extends React.PureComponent {
  
    componentDidMount() {
    this.props.onIncrement();
    console.warn(this.props.str);
    console.warn(this.props.count);
  }
   
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
            <>
            {this.props.error ? <span>{this.props.error}</span> : null}
            <form 
                className={regForm.formContent}
                 onSubmit={this.props.handleSubmit(this.handleSubmit)}
            >
           
            <Field 
                name='loginField'
                type='text'
                component={Input}
                validate={[formValidator]}
                placeholderText='Введите имя'
            />
            <Field 
                name='email'
                type='text'
                component={Input}
                validate={[onlyEmail]}
                placeholderText='Введите email'
            />
            <Field 
                name='passwordField'
                type='password'
                component={Input}
                validate={[formValidator]}
                placeholderText='Введите пароль'
            />
            <Field 
                name='repPas'
                type='password'
                component={Input}
                validate={[passValid]}
                placeholderText='Повторите пароль'
            />
            <Button
            onClick={this.Click}
                className={regForm.button}>Применить и войти</Button>
           
        </form>
        </>
        )
    }
}
const connectedToReduxForm = reduxForm({
  form: "loginForm",
  validate: formValidator
});

const mapStateToProps = state => {
    return {
      count: state?.count,
      initialValues: {
        loginField: "Initialing login field"
      }
    };
  };
  
  const mapDispatchToProps= (dispatch) => {
    return {
      onIncrement() {
        dispatch(incAction());
      }
    };
  };

  const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedToReduxForm(LoginForm));



export default ConnectedLogin

