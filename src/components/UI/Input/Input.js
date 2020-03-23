import React, { Fragment } from 'react';
import input from './Input.module.css';
import classNames from 'classnames';
 const myInput = (props) =>{
    const {input, type, placeholder, meta}=props;
    const classes = classNames(
        'inp',
        className,
    );
    return (
        <Fragment>
        <input {...props.input} 
                type={props.type} 
                placeholder={props.placeholder} 
                className={classes, input.input}/>

        {meta.error &&
        meta.touched &&
        <div>
          {meta.error}
        </div>}
        </Fragment>
    )
}
export default myInput;