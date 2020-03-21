import React from 'react'
import blackout from './Blackout.module.css'

const Blackout = props => <div className={blackout.blackout} onClick={props.onClick}/>

export default Blackout