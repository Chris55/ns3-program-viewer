import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { HashRouter, BrowserRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Privacy from "./Privacy";
import Menu from "./Menu";
import Offline from "./Offline";
import { useDispatch, useSelector } from "react-redux";
import { nordSelector, setError } from "./features/nord/nord-slice-reducer";
import StatCounter from "statcounter";
import { Navbar } from "react-bootstrap";

const App = () => {
    const { error } = useSelector(nordSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(setError(""));
        }
    }, [error]);

    const isElectron = /electron/i.test(navigator.userAgent);
    const root = "/" + process.env.REACT_APP_ROOT;

    const details = (
        <Routes>
            <Route path={root} element={<Menu />}>
                <Route path="privacy" element={<Privacy />} />

                <Route path="offline" element={<Offline />} />

                <Route path="about" element={<About />} />

                <Route path="doc" element={<Navigate to={root} />} />

                <Route path="" element={<Main />} />

                <Route path="*" element={<Navigate to={root} />} />
            </Route>
        </Routes>
    );

    const { VITE_STAT_ID, VITE_STAT_CODE } = import.meta.env;

    return (
        <>
            {isElectron && <HashRouter>{details}</HashRouter>}
            {!isElectron && <BrowserRouter>{details}</BrowserRouter>}
            <ToastContainer />
            <StatCounter sc_project={VITE_STAT_CODE} sc_security={VITE_STAT_ID} />
        </>
    );
};

export default App;
