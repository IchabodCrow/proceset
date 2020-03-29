import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import regForm from '../../PageFormRegistration/RegForm/RegForm.module.css'
import { matchInput, passLength, email, required} from '../../../utils/validators'
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux"
import { incAction } from "../../../store/index.reducers";
import { gql } from 'apollo-boost';
import { graphql, DataProps } from 'react-apollo';


import Button from '../../../UI/Button/Button'
import myInput from '../../../UI/Input/Input'





const server = new Promise((resolve, reject) => {
 
    resolve({
      data: {
        user: "Vasya"
      }
    });
  });


class LoginForm extends React.Component {
    
    handleSubmit(fields) {
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
        const { data } = this.props;

        if(data.loading) {
            return <p>Загрузка...</p>;
        }

        if(data.error) {
            return <p>Ошибка...</p>
        }
  
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
                onClick={this.Click}
                className={regForm.button}>Войти в систему
            </Button>
  
        </form>

        <p>
        Герой с идентификатором "{data.hero?.id}" и именем "{data.hero?.name}"
        </p>
        </div>
        )
    }
}

export default LoginForm


