import React from 'react';


import back from './index.module.css';
import Menu from '../../components/BackgroundPage/Navigation/Menu/Menu';
import Drower from '../../components/BackgroundPage/Navigation/Drower/Drower';
import { Component } from 'react';




class PrivateLayout extends Component {

  constructor(props){
    super(props)

    this.state = {
        menu: false,
    }

    this.menuHandler = this.menuHandler.bind(this);
    this.menuCloseHandler = this.menuCloseHandler.bind(this);
}

menuHandler() {
  this.setState({
      menu: !this.state.menu
  })
}

menuCloseHandler() {
  this.setState({
      menu: false
  })
}

render() {
  return (
    <div className={back.wrapper}>
                <div className={back.background}></div>
                <div className={back.header}>
                   <Menu 
                   onToggle={this.menuHandler}
                    isOpen={this.state.menu}/>
                   <Drower
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}/>
                </div>
                {/* <Route path="/setting" render={() => <SettingPage/>}/>
                <Route path="/process" render={() => <ProcessList/>}/> */}
            {this.props.children}
      
    </div>
  )
}

};

export default PrivateLayout;
