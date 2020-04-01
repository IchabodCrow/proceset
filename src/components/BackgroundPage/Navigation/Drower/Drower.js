import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import Blackout from '../../../UI/Blackout/Blackout';
import drower from './Drower.module.css'
import {ReactComponent as ButSvg} from '../../../../resources/Union.svg';
import {ReactComponent as UserSvg} from '../../../../resources/UserName.svg';
import {ReactComponent as SetSvg} from '../../../../resources/Settings.svg';


const cls = [drower.drower]

export default class Drower extends Component {

    render(){

        const cls = [drower.drower]

        if(!this.props.isOpen){
            cls.push(drower.close)
        }

        return (
            <>
            <nav className={cls.join(' ')}>
               <ul>
                   <li>
                       <ButSvg className={drower.icon} />
                       <Link 
                            path to={'/'} 
                            className={drower.link}
                        >Proceses
                        </Link>
                    </li>
                   <li>
                       <UserSvg className={drower.icon}/>
                        <Link 
                            path to={'/setting'} 
                            className={drower.link}>
                            User name
                        </Link>
                    </li>
                   <li>
                       <SetSvg className={drower.icon}/>
                       <Link path to={'/process'} className={drower.link}>Process list</Link>
                    </li>
                 
               </ul>
            </nav>
            {this.props.isOpen ? <Blackout onClick={this.props.onClose}/> : null}
            </>
            
        )
    }
}