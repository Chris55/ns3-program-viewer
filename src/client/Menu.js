import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Nav, Navbar } from "react-bootstrap";
import { menuSelector, setActiveKey } from "./features/menu/menu-slice-reducer";
import { Link, Outlet } from "react-router-dom";
import { nordSelector } from "./features/nord/nord-slice-reducer";

const Menu = () => {
    const dispatch = useDispatch();
    const { activeKey } = useSelector(menuSelector);
    const { isElectron } = useSelector(nordSelector);

    const handleSelect = (key) => {
        dispatch(setActiveKey(key));
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey={activeKey} onSelect={handleSelect}>
                        <Nav.Link eventKey="home" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey="privacy" as={Link} to="/privacy">
                            Privacy
                        </Nav.Link>
                        {!isElectron && (
                            <Nav.Link eventKey="offline" as={Link} to="/offline">
                                Offline
                            </Nav.Link>
                        )}
                        <Nav.Link eventKey="about" as={Link} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>version {process.env.REACT_APP_VERSION}</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Menu;
