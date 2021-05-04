import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./features/menu/menuSliceReducer";
import { Provider } from "react-redux";
import nordSliceReducer from "./features/nord/nordSliceReducer";

const store = configureStore({
    reducer: {
        menuStore: menuSliceReducer,
        nordStore: nordSliceReducer
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
