import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import nordLogoProgram from "./assets/nord-logo-program.svg";
import nordLogoSynth from "./assets/nord-logo-synth.svg";
import nordLogoProgramBundle from "./assets/nord-logo-program-bundle.svg";
import nordLogoSynthBundle from "./assets/nord-logo-synth-bundle.svg";
import nordLogoListBundle from "./assets/nord-logo-list-bundle.svg";
import nordLogoBackup from "./assets/nord-logo-backup.svg";
import AppName from "./AppName";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import LoadButton from "./LoadButton";
import { useSelector } from "react-redux";
import { nordSelector } from "./features/nord/nord-slice-reducer";
import Handmade from "./Handmade";
import Footer from "./Footer";
import cx from "classnames";
import NordFigure from "./nord/nord-figure.jsx";
import Disclaimer from "./Disclaimer.jsx";

const Home = () => {
    const { isElectron, progress } = useSelector(nordSelector);

    return (
        <Container fluid className="h-100">
            <Row className="h-100">
                <Col>
                    <Row>
                        <ProgressBar
                            className={cx("bg-white", {
                                "progress-fadeOut": progress === 100,
                            })}
                            now={progress}
                        />
                    </Row>
                    <Row className="h-100">
                        <Col className="m-5">
                            <Row>
                                <Card className="border-0">
                                    <Card.Body>
                                        <Card.Title>
                                            <h2>
                                                <AppName />
                                            </h2>
                                        </Card.Title>
                                        <Card.Text>
                                            {isElectron ? "Offline" : "Online"} tool to review Nord Stage 2/2EX/3
                                            program and synth file settings.
                                        </Card.Text>
                                        <LoadButton variant="primary" />
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Card className="border-0">
                                    <Card.Body>
                                        <Card.Text>Following files are supported:</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="m-2">
                                <NordFigure
                                    image={nordLogoProgram}
                                    title="Program Files"
                                    subTitle="(ns2p, ns2l, ns3f, ns3l)"
                                />

                                <NordFigure image={nordLogoSynth} title="Synth Files" subTitle="(ns2s, ns3y)" />

                                <NordFigure
                                    image={nordLogoProgramBundle}
                                    title="Program Bundle Files (*)"
                                    subTitle="(ns2pb, ns3fb)"
                                />

                                <NordFigure
                                    image={nordLogoSynthBundle}
                                    title="Synth Bundle Files (*)"
                                    subTitle="(ns2synthpb, ns3synthpb)"
                                />

                                <NordFigure
                                    image={nordLogoListBundle}
                                    title="Song Bundle Files (*)"
                                    subTitle="(ns3sbundle)"
                                />

                                <NordFigure
                                    image={nordLogoBackup}
                                    title="Backup Files (*)"
                                    subTitle="(ns2b, ns2exb, ns3b)"
                                />
                            </Row>
                            <Row>
                                <small className="text-muted m-4">
                                    (*) samples are not loaded from bundle/backup files to improve loading time
                                </small>
                            </Row>

                            <Row className="">
                                <Disclaimer />
                                <Footer />
                            </Row>
                        </Col>
                    </Row>
                </Col>
                {/*<Col xs={1} className="ns3-panel-skin handmade-container">*/}
                {/*    <Handmade />*/}
                {/*</Col>*/}
            </Row>
        </Container>
    );
};

export default Home;
