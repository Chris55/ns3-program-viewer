import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import "./client/index.css";
import { store } from "./client/features/store.js";
import { App } from "./client/App.js";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
