import React from "react";
import "./App.css";
import ProcesetFirstPage from "./components/ProcesetFirstPAge/ProcesetFirstPage";
import history from './components/history/history'
import {Provider} from 'react-redux'
import store from './components/store/index.store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hoc';
import { createBrowserHistory } from "history";
import BackgroundPage from './components/BackgroundPage/BackgroundPage'
import { Route, Router} from "react-router";
import SettingsPage from "./components/BackgroundPage/SettingsPage/SettingsPage";
import Process from "./components/BackgroundPage/Process/Process";
import PageFormIn from "./components/ProcesetFirstPAge/PageFormIn/PageFormIn";
import PageFormRegistration from "./components/ProcesetFirstPAge/PageFormRegistration/PageFormRegistration";
import ProcessList from "./components/ProcessList/ProcessList";


const client = new ApolloClient({
  uri: "http://localhost:4000/api/",
  request: (operation) => {
    
    const token = localStorage.getItem("token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});




class App extends React.Component {

  
  render(){
    return (
    <div>
      <ApolloProvider client={client}>
        <Provider store={store}>
        
          <Router history={history}>
              
                <Route exact path="/" component={PageFormIn}/>
             
              
    
  
              <Route render={() => <BackgroundPage/>}/>
                  <Route path="/setting" component={SettingsPage}/>
                  <Route path="/process" component={Process}/>
               <ProcessList/>
          </Router>
         
       </Provider>
      </ApolloProvider>
     
  
 
    </div>
  );
  }
}


export default App;
