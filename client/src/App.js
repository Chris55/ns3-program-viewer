import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Privacy from "./Privacy";
import Menu from "./Menu";
import Offline from "./Offline";
import { useDispatch, useSelector } from "react-redux";
import { nordSelector, setError } from "./features/nord/nordSliceReducer";
import { ProgressBar } from "react-bootstrap";

const App = () => {
    const { error, progress } = useSelector(nordSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(setError(""));
        }
    }, [error]);

    const isElectron = /electron/i.test(navigator.userAgent);

    const details = (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={Main} />

                <Route exact path="/privacy" component={Privacy} />

                <Route exact path="/offline" component={Offline} />

                <Route exact path="/about" component={About} />

                <Route exact path="/media" component={null} />

                <Route path={["/", "/home"]}>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );

    return (
        <>
            {isElectron && <HashRouter>{details}</HashRouter>}
            {!isElectron && <BrowserRouter>{details}</BrowserRouter>}
            <ToastContainer />
        </>
    );
};

export default App;
