import React from 'react'
import errMes from './ErrorMessage.module.css'
import {ReactComponent as Allert} from '../../resources/alert.svg';

class ErrorMessage extends React.Component {
  render(){
    return (
      <>
        <div className={errMes.box}>
         
        </div>
      </>
    )
  }
}
export default ErrorMessage

