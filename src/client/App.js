import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Menu from "./Menu.js";
import Offline from "./Offline.js";
import { useDispatch, useSelector } from "react-redux";
import { nordSelector, setError } from "./features/nord/nord-slice-reducer.js";

export const App = () => {
    const { error } = useSelector(nordSelector);
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
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route path="privacy" element={<Privacy />} />

                    <Route path="offline" element={<Offline />} />

                    <Route path="about" element={<About />} />

                    <Route path="" element={<Main />} />

                    <Route path="*" element={<Main />} />
                </Route>
            </Routes>
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
