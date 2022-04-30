import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppName from "./AppName";
import Handmade from "./Handmade";
import Footer from "./Footer";
import { openUrl } from "./utils/handy";
import { andreasUrl, meUrl, nordUrl, nufUrl } from "./constants";

const About = () => {
    return (
        <Container fluid>
            <Row className="handmade-container">
                <Col xs={1} className="ns3-panel-skin flex-grow-1">
                    <Handmade />
                </Col>
                <Col>
                    <Row className="main-area">
                        <div className="mx-sm-5 mx-sx-2 mt-3">
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>About</Card.Title>
                                    <Card.Text>
                                        <AppName /> is a free and handmade application developed by Nord User Forum
                                        members, more details{" "}
                                        <a onClick={() => openUrl(nufUrl)} className="btn-link pointer">
                                            here
                                        </a>
                                        . This is an online collaboration, and we put a huge amount of effort into this
                                        viewer to be accurate, feel free to contact us on the forum if something is
                                        wrong.
                                    </Card.Text>
                                    <Card.Text>
                                        To clarify{" "}
                                        <a onClick={() => openUrl(nordUrl)} className="btn-link pointer">
                                            Nord Keyboards / Clavia DMI AB
                                        </a>{" "}
                                        position regarding this publication, we contacted them. Answer from the support:
                                    </Card.Text>
                                    <blockquote className="m-3 blockquote">
                                        <footer className="blockquote-footer text-muted">
                                            I talked to the guys here, and it is fine with us for you to proceed with
                                            this project - as long as you accompany your published work with a
                                            disclaimer that Clavia in no way is affiliated with it. We will not be able
                                            to provide any assistance with this, but good luck nonetheless!
                                            <br />
                                            <br />
                                            @Clavia Support.
                                        </footer>
                                    </blockquote>
                                    <Card.Title className="mt-5">Author</Card.Title>
                                    <ul>
                                        <li>
                                            <a onClick={() => openUrl(meUrl)} className="btn-link pointer">
                                                Christian Florentz
                                            </a>{" "}
                                            (@florence)
                                        </li>
                                    </ul>
                                    <Card.Title className="mt-5">Contributors</Card.Title>
                                    <ul>
                                        <li>
                                            Special thanks to{" "}
                                            <a onClick={() => openUrl(andreasUrl)} className="btn-link pointer">
                                                Andreas Gallenmueller
                                            </a>{" "}
                                            (@gaaal)
                                        </li>

                                        <li>Thanks to other NUF members: @cookie, @gordon, @rpossemo, @hobster</li>
                                    </ul>
                                    <Card.Title className="mt-5">Disclaimer</Card.Title>
                                    <Card.Text>
                                        We are not affiliated, associated, endorsed by, or in any way officially
                                        connected with{" "}
                                        <a onClick={() => openUrl(nordUrl)} className="btn-link pointer">
                                            Nord Keyboards / Clavia DMI AB
                                        </a>
                                        , or any of its subsidiaries or its affiliates.
                                    </Card.Text>
                                    <Card.Text>
                                        The names Nord and Clavia as well as related names, marks, emblems and images
                                        are registered trademarks of their respective owners.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
