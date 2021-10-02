import React from "react";
import { Col, Row } from "react-bootstrap";
import AppName from "./AppName";

const Footer = () => {
    return (
        <Row>
            <Col className="flex-grow-1 text-muted text-right mx-5">
                <hr />
                <div className="">
                    <small>
                        <AppName /> (c) {new Date().getFullYear()} Christian Florentz
                    </small>
                </div>
            </Col>
        </Row>
    );
};

export default Footer;
