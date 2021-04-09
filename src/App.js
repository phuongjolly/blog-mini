import logo from './logo.svg';
import './App.css';
import React from "react";
import {connect, Provider} from "react-redux";
import Home from "./components/Home";
import {store} from "./redux/store";
import {Route, Router, Switch} from "react-router";
import Posts from "./components/Posts";
import {createBrowserHistory} from "history";
import Header from "./components/Header";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
            <div className="container">
                <Header/>
                <Switch>
                    <Route path='' exact component={Home} />
                    <Route path='/posts' component={Posts} />
                </Switch>
            </div>
        </Router>
    </Provider>
  );
}

export default App;
