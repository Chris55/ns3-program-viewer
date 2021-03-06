import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import nordLogoProgram from "./assets/nord-logo-program.svg";
import nordLogoSynth from "./assets/nord-logo-synth.svg";
import AppName from "./AppName";
import {Card, Col, Container, Media, Row} from "react-bootstrap";
import LoadButton from "./LoadButton";
import {useSelector} from "react-redux";
import {nordSelector} from "./features/nord/nordSliceReducer";
import Handmade from "./Handmade";

const Home = () => {
    const {isElectron} = useSelector(nordSelector);

    return (
        <Container fluid>
            <Row>
                <Col xs={1} className="ns3-panel-skin handmade-container">
                    <Handmade/>
                </Col>
                <Col>
                    <div className="mx-sm-5 mx-sx-2 mt-3">
                        <Card className="border-0">
                            <Card.Body>
                                <Card.Title>
                                    <h2>
                                        <AppName/>
                                    </h2>
                                </Card.Title>

                                <Card.Subtitle className="text-muted">
                                    {isElectron ? "Offline" : "Online"} tool to review Nord Stage 2/2EX/3 program and synth file
                                    settings. Following files are supported:
                                </Card.Subtitle>

                                <Media className="mt-4">
                                    <img
                                        width={48}
                                        height={48}
                                        className="align-self-center mr-3"
                                        src={nordLogoProgram}
                                        alt="logo"
                                    />
                                    <Media.Body>
                                        <h6 className="mb-2 text-muted">Program Files</h6>
                                        <p className="text-muted mt-2">
                                            Nord Stage 2 (ns2p)
                                            <br/>
                                            Nord Stage 3 (ns3f)
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Media className="mt-2">
                                    <img
                                        width={48}
                                        height={48}
                                        className="align-self-center mr-3"
                                        src={nordLogoSynth}
                                        alt="logo"
                                    />
                                    <Media.Body>
                                        <h6 className="mb-2 text-muted">Synth Files</h6>
                                        <p className="text-muted mt-2">
                                            Nord Stage 2 (ns2s)
                                            <br/>
                                            Nord Stage 3 (ns3y)</p>
                                    </Media.Body>
                                </Media>
                            </Card.Body>
                        </Card>

                        <Card className="border-0">
                            <Card.Body>
                                <Card.Title>Let's get started</Card.Title>
                                <LoadButton variant="primary"/>
                            </Card.Body>
                        </Card>

                        <Card className="border-0 text-muted">
                            <Card.Body>
                                <Card.Subtitle className="mt-5">Disclaimer</Card.Subtitle>

                                <Card.Text>
                                    We are not affiliated, associated, endorsed by, or in any way officially connected
                                    with <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>, or
                                    any of its subsidiaries or its affiliates. The names Nord and Clavia as well as
                                    related names, marks, emblems and images are registered trademarks of their
                                    respective owners.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/*<div style={{height: "20vh"}}/>*/}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
