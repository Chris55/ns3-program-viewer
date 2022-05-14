import React from "react";
import { Card, Col, Container, Media, Row } from "react-bootstrap";
import AppName from "./AppName";
import appleLogo from "./assets/os-logo-apple.png";
import microsoftLogo from "./assets/os-logo-microsoft.png";
import linuxLogo from "./assets/os-logo-linux.png";
import Handmade from "./Handmade";
import Footer from "./Footer";

const Offline = () => {
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
                                    <Card.Title>Offline Version</Card.Title>

                                    <Card.Text>
                                        <AppName /> is also available as an offline and standalone application. In this
                                        version, everything is running locally, nothing is send to a remote server.
                                        Installers are available for MacOS, Windows, and Linux Distributions.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Media className="mt-5">
                                <img
                                    width={64}
                                    height={64}
                                    className="align-self-start mr-3"
                                    src={appleLogo}
                                    alt="logo"
                                />
                                <Media.Body>
                                    <h6 className="mb-2 text-muted">MacOS</h6>
                                    <p>
                                        MacOS Installer x64 (minimum 10.14 - Mojave) is available on the{" "}
                                        <a href="https://apps.apple.com/app/id1549939673">App Store</a>, or from{" "}
                                        <a href="https://github.com/Chris55/ns3-program-viewer/releases">here</a>.
                                        <br />
                                        (expand Assets and select *.dmg file)
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media className="mt-5">
                                <img
                                    width={64}
                                    height={64}
                                    className="align-self-start mr-3"
                                    src={microsoftLogo}
                                    alt="logo"
                                />
                                <Media.Body>
                                    <h6 className="mb-2 text-muted">Windows</h6>
                                    <p>
                                        Windows 10 Installer x64 is available{" "}
                                        <a href="https://github.com/Chris55/ns3-program-viewer/releases">here</a>
                                        <br />
                                        (expand Assets and select *.exe file)
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media className="mt-5">
                                <img
                                    width={54}
                                    height={54}
                                    className="align-self-start ml-1 mr-4"
                                    src={linuxLogo}
                                    alt="logo"
                                />
                                <Media.Body>
                                    <h6 className="mb-2 text-muted">Linux Distributions</h6>
                                    <p>
                                        Installer x64 and arm64 are available for Debian/Ubuntu and Fedora/SUSE{" "}
                                        <a href="https://github.com/Chris55/ns3-program-viewer/releases">here</a>
                                        <br />
                                        (expand Assets and select *.deb or *.rpm file)
                                    </p>
                                </Media.Body>
                            </Media>
                            {/*<div style={{ height: "20vh" }} />*/}
                        </div>
                    </Row>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default Offline;
