import React, { Component } from 'react';
import {ReactComponent as ButSvg} from '../../../../resources/Union.svg';
import menu from './Menu.module.css'
import Drower from '../Drower/Drower';

export default class Menu extends Component {
    constructor(props){
        super(props)
    }

    render(){
        

        return(
            <nav>
             <button 
             onClick={this.props.onToggle}
             className={menu.button}
                >
                    <ButSvg className={menu.iconBtn}/>
                    <div className={menu.textBtn}>Меню</div>
              </button>
            </nav>
        )
    }
}