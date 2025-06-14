import React from "react";
import { Card } from "react-bootstrap";
import AppName from "./AppName";

const Footer = () => {
    return (
        <Card className="border-0">
            <Card.Body>
                <Card.Text className="text-end">
                    <AppName /> (c) 2020 - {new Date().getFullYear()} Christian Florentz
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Footer;
