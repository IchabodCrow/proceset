import React from "react";
import "./App.css";
import history from "./components/history/history";
import { Provider } from "react-redux";
import store from "./components/store/store";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hoc";
import { Router, Switch } from "react-router";
import ProcessList from "./components/ProcessList/ProcessList";
import RouteWithLayout from "./layouts/RouteWithLayouts";
import PublicLayout from "./layouts/PublicLayout/index";
import PrivateLayout from "./layouts/PrivateLayout/index";
import LoginForm from "./components/LoginForm/LoginForm";
import regFormContainer from "./components/RegForm/RegistrationPage"
import SettingContainer from "./components/BackgroundPage/SettingsPage/SettingsPage";

const client = new ApolloClient({
  uri: "http://localhost:4000/api/",
  request: (operation) => {
    const token = localStorage.getItem("token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
});

class App extends React.Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Router history={history}>
              <Switch>
                <RouteWithLayout
                  layout={PublicLayout}
                  exact
                  path="/"
                  component={LoginForm}
                />
                <RouteWithLayout
                  layout={PublicLayout}
                  path="/registration"
                  component={regFormContainer}
                />
                <RouteWithLayout
                  layout={PrivateLayout}
                  path="/setting"
                  component={SettingContainer}
                />
                <RouteWithLayout
                  layout={PrivateLayout}
                  path="/process"
                  component={ProcessList}
                />
              </Switch>
            </Router>
          </Provider>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
