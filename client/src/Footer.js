import React from "react";
import { Col, Row } from "react-bootstrap";
import AppName from "./AppName";

const Footer = () => {
    return (
        <Row>
            <Col className="flex-grow-1 text-muted text-right mx-sm-5 mx-sx-2 border-0">
                <hr className="footer-line"/>

                    <div style={{fontSize: "0.9rem"}}>
                        <AppName /> (c) {new Date().getFullYear()} Christian Florentz
                    </div>

            </Col>
        </Row>
    );
};

export default Footer;
