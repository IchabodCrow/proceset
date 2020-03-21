import React from "react";
import { render } from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import ProcesetFirstPage from "./components/ProcesetFirstPAge/ProcesetFirstPage";
import BackgroundPage from "./components/BackgroundPage/BackgroundPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import {Provider as ReduxProvider} from 'react-redux'

class App extends React.Component {
  render(){
    return (
    <div>
      <ReduxProvider>
            <BrowserRouter>
           <ProcesetFirstPage />
       {/* <BackgroundPage/> */}
      </BrowserRouter>
      </ReduxProvider>
  
 
    </div>
  );
  }
}


export default App;
