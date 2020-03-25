import React, { Fragment } from 'react';
import myInp from './Input.module.css';

//  const myInput = (props) =>{
//     const {input, type, placeholder, meta}=props;

      
//     const cls = [myInp.input]

//     if(meta.error){
//         cls.push(myInp.error)
//     }

//     return (
//         <Fragment>
//         <input {...props.input} 
//                 type={props.type} 
//                 placeholder={props.placeholder} 
//                 className={cls.join(' ')}
//         />

//         {meta.error &&
//         meta.touched &&
//         <div>
         
//         </div>}
//         </Fragment>
//     )
// }

const myInput = ({ input, label, type, meta: { touched, error, warning } }) => {

  const cls = [myInp.input]

   
  if(error && touched){
    cls.push(myInp.error);
  }  

  return (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={cls.join(' ')}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)}

export default myInput;