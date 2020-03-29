import React from "react";
import "./App.css";
import ProcesetFirstPage from "./components/ProcesetFirstPAge/ProcesetFirstPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import {Provider} from 'react-redux'
import store from './components/store/index.store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hoc';
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
          <BrowserRouter>
             <ProcesetFirstPage />
             <ProcessList/>
         {/* <BackgroundPage/> */}
         </BrowserRouter>
       </Provider>
      </ApolloProvider>
     
  
 
    </div>
  );
  }
}


export default App;
