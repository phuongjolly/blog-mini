import {postReducers} from "./PostReducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {authenticationReducers} from "./authenticationReducers";

const reducers = {
    posts: postReducers,
    authentication: authenticationReducers
};

export const store = createStore(combineReducers(reducers), applyMiddleware(thunk, logger))