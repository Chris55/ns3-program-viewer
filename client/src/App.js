import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Privacy from "./Privacy";
import Menu from "./Menu";
import Offline from "./Offline";
import { useSelector } from "react-redux";
import { nordSelector } from "./features/nord/nordSliceReducer";

const App = () => {
    const { error } = useSelector(nordSelector);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    return (
        <>
            <Router>
                <Menu />

                <Switch>
                    <Route exact path={["/", "/home"]} component={Main} />

                    <Route exact path="/privacy" component={Privacy} />

                    <Route exact path="/offline" component={Offline} />

                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>

            <ToastContainer />
        </>
    );
};

export default App;
