import React from "react";
import { render } from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import ProcesetFirstPage from "./components/ProcesetFirstPAge/ProcesetFirstPage";
import BackgroundPage from "./components/BackgroundPage/BackgroundPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import {Provider} from 'react-redux'
import store from './components/store/index.store'

class App extends React.Component {

  
  render(){
    return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
           <ProcesetFirstPage />
       {/* <BackgroundPage/> */}
        </BrowserRouter>
      </Provider>
  
 
    </div>
  );
  }
}


export default App;
