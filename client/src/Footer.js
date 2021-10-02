import React from "react";
import { Card } from "react-bootstrap";
import AppName from "./AppName";

const Footer = () => {
    return (
        <Card className="border-0 mt-3">
            <Card.Body className="border-top">
                <Card.Subtitle className="text-muted text-right">
                    <small>
                        <AppName /> (c) {new Date().getFullYear()} Christian Florentz
                    </small>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default Footer;
