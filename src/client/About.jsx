import React from "react";
import { Card, Col, Container, Navbar, Row } from "react-bootstrap";
import AppName from "./AppName";
import Footer from "./Footer";
import { openUrl } from "./utils/handy";
import {
    andreasUrl,
    cookieNuf,
    florenceNuf,
    gaaalNuf,
    gordonNuf,
    hobsterNuf,
    meUrl,
    nordUrl,
    nufUrl,
    rpossemoNuf,
} from "./constants";
import Disclaimer from "./Disclaimer.jsx";

const About = () => {
    return (
        <Container fluid>
            <Row className="mt-5">
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
                                        <Navbar.Text>ID {import.meta.env.VITE_STAT_ID}</Navbar.Text>
                                        <Navbar.Text>CODE {import.meta.env.VITE_STAT_CODE}</Navbar.Text>
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
                                            / (
                                            <a onClick={() => openUrl(florenceNuf)} className="btn-link pointer">
                                                @florence
                                            </a>
                                            )
                                        </li>
                                    </ul>
                                    <Card.Title className="mt-5">Contributors</Card.Title>
                                    <ul>
                                        <li>
                                            <a onClick={() => openUrl(andreasUrl)} className="btn-link pointer">
                                                Andreas Gallenmueller
                                            </a>{" "}
                                            / (
                                            <a onClick={() => openUrl(gaaalNuf)} className="btn-link pointer">
                                                @gaaal
                                            </a>
                                            )
                                        </li>

                                        <li>
                                            <a onClick={() => openUrl(rpossemoNuf)} className="btn-link pointer">
                                                @rpossemo
                                            </a>
                                        </li>

                                        <li>
                                            <a onClick={() => openUrl(cookieNuf)} className="btn-link pointer">
                                                @cookie
                                            </a>
                                        </li>

                                        <li>
                                            <a onClick={() => openUrl(gordonNuf)} className="btn-link pointer">
                                                @gordon
                                            </a>
                                        </li>

                                        <li>
                                            <a onClick={() => openUrl(hobsterNuf)} className="btn-link pointer">
                                                @Hobster
                                            </a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Disclaimer />
                        </div>
                    </Row>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
