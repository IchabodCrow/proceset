import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import { withMutation, graphql, DataProps } from "react-apollo";
import layoutCss from "../../layouts/PublicLayout/index.module.css"
import LoginMutation from '../queries/loginMutation'
import Button from '../../UI/Button/Button'
import myInput from '../../UI/Input/Input'
import history from '../history/history'
import { Link } from 'react-router-dom';
import {ReactComponent as Eye} from '../../resources/closeEye.svg';


class LoginForm extends React.Component {
    constructor(props){
      super(props)
      this. handleSubmit = this.handleSubmit.bind(this);
      this. showPasswordText = this.showPasswordText.bind(this);
    }
    
    state = {
        pressed: false
    }

    showPasswordText(){
     if(this.state.pressed === true){
        this.setState({
         ...this.state,
         pressed: false
        })
     }
     else {
       this.setState({
         ...this.state,
         pressed : true
       })
     }
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
          console.log(res.data.login)
          localStorage.setItem('token', res.data.login.token)
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
              <button onClick={this.showPasswordText} className={layoutCss.butEye}><Eye className={layoutCss.eyeIcon}/></button>
              <Field
                  name='passwordField'
                  type={this.state.pressed === false ? 'password' : 'text'}
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


