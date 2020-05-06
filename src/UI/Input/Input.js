import React, { Fragment } from 'react';
import myInp from './Input.module.css';



const myInput = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => {

  const hasError = touched && error

  return (
  <div>
      <input {...input} placeholder={placeholder} type={type} className={myInp.input + ' ' + (hasError ? myInp.error : '') }/>
  {hasError ? <span className={myInp.label}>{error}</span> : <span className={myInp.label}><br></br></span>}
  </div>
)}

export default myInput;