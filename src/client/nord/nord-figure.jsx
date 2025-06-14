import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const NordFigure = ({ image, subTitle, title }) => {
    return (
        <div style={{ width: "200px" }} className="p-3">
            <Row>
                <Col>
                    <Image width={48} height={48} alt="nordLogoProgram" src={image} />
                </Col>
            </Row>
            <Row>{title}</Row>
            <Row>{subTitle}</Row>
        </div>
    );
};

export default NordFigure;
