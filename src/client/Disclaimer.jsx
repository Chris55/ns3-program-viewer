import React from "react";
import { Card } from "react-bootstrap";
import { nordUrl } from "./constants.jsx";
import { openUrl } from "./utils/handy.jsx";

const Disclaimer = () => {
    return (
        <Card className="border-0">
            <Card.Body>
                <Card.Title className="mt-3">Disclaimer</Card.Title>

                <Card.Text>
                    We are not affiliated, associated, endorsed by, or in any way officially connected with{" "}
                    <a onClick={() => openUrl(nordUrl)} className="btn-link pointer">
                        Nord Keyboards / Clavia DMI AB
                    </a>
                    , or any of its subsidiaries or its affiliates.
                </Card.Text>

                <Card.Text>
                    The names Nord and Clavia as well as related names, marks, emblems and images are registered
                    trademarks of their respective owners.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Disclaimer;
