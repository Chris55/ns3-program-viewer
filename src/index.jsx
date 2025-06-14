import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import "./client/index.css";
import App from "./client/App";
import { store } from "./client/features/store";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App className="h-100" />
        </Provider>
    </React.StrictMode>,
);
