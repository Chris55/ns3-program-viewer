import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Privacy from "./Privacy";
import Menu from "./Menu";
import Offline from "./Offline";

const isElectron = /electron/i.test(navigator.userAgent);
console.log("Electron:", isElectron);

function App() {
    return (
        <>
            <Router>
                <Menu />

                <Switch>
                    {/*<Route path="/">*/}
                    {/*    <Redirect to="/home" component={Main} />*/}
                    {/*</Route>*/}

                    <Route exact path={["/", "/home"]} component={Main} />

                    <Route exact path="/privacy" component={Privacy} />

                    <Route exact path="/offline" component={Offline} />

                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>

            <ToastContainer />
        </>
    );
}

export default App;
