import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./features/store";

const container = document.getElementById("root");

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

// react v18, (but ag-grid ^27.2.1 required)
// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        ,
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
