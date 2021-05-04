import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import combineReducers from "./reducers";
import App from "./components/App";

ReactDom.render(
    <Provider store={createStore(combineReducers)}>
        <App />
    </Provider>, 
    document.querySelector("#root")
    );

