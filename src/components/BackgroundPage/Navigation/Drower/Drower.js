import React, { Component } from 'react'
import drower from './Drower.module.css'
import {Link} from 'react-router-dom'
import Blackout from '../../../UI/Blackout/Blackout';
import {ReactComponent as ButSvg} from '../../../../resources/Union.svg';
import {ReactComponent as UserSvg} from '../../../../resources/UserName.svg';
import {ReactComponent as SetSvg} from '../../../../resources/Settings.svg';



const links = [
     `proceset`,'Username', 'Список процессов'
];



export default class Drower extends Component {
    constructor(props){
        super(props)
    }

    renderLinks(){
        return (
            links.map((link, index) => (
                 <li key={index}>
                    <Link className={drower.link}> {link}</Link>
                  </li>
                )
            )
        )
    }

    render(){

        const cls = [drower.drower]

        if(!this.props.isOpen){
            cls.push(drower.close)
        }

        return (
            <>
            <nav className={cls.join(' ')}>
               <ul>
                   {this.renderLinks()}
               </ul>
            </nav>
            {this.props.isOpen ? <Blackout onClick={this.props.onClose}/> : null}
            </>
            
        )
    }
}