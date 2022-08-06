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
import { Card, Col, Container, Media, ProgressBar, Row } from "react-bootstrap";
import LoadButton from "./LoadButton";
import { useSelector } from "react-redux";
import { nordSelector } from "./features/nord/nord-slice-reducer";
import Handmade from "./Handmade";
import Footer from "./Footer";
import cx from "classnames";
import { openUrl } from "./utils/handy";
import { nordUrl } from "./constants";

const Home = () => {
    const { isElectron, progress } = useSelector(nordSelector);

    return (
        <>
            <Container fluid>
                <Row className="handmade-container">
                    <Col xs={1} className="ns3-panel-skin flex-grow-1">
                        <Handmade />
                    </Col>

                    <Col className="px-0">
                        <ProgressBar
                            className={cx("bg-white", {
                                "progress-fadeOut": progress === 100,
                            })}
                            now={progress}
                        />
                        <Row className="main-area px-4">
                            <div className="mx-sm-5 mx-sx-2 mt-3">
                                <Card className="border-0">
                                    <Card.Body>
                                        <Card.Title>
                                            <h2>
                                                <AppName />
                                            </h2>
                                        </Card.Title>

                                        <Card.Subtitle className="text-muted">
                                            {isElectron ? "Offline" : "Online"} tool to review Nord Stage 2/2EX/3
                                            program and synth file settings.
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>

                                <Card className="border-0">
                                    <Card.Body>
                                        <Card.Title>Let's get started</Card.Title>
                                        <LoadButton className="nav-link" variant="primary" />
                                    </Card.Body>
                                </Card>

                                <Card className="border-0 mt-4">
                                    <Card.Body>
                                        <Card.Subtitle className="text-muted">
                                            Following files are supported:
                                        </Card.Subtitle>

                                        <Row className="mt-4">
                                            <Col md={4}>
                                                <Media className="">
                                                    <img
                                                        width={48}
                                                        height={48}
                                                        className="align-self-center mr-3"
                                                        src={nordLogoProgram}
                                                        alt="logo"
                                                    />
                                                    <Media.Body>
                                                        <h6 className="mb-2 text-muted">Program Files</h6>
                                                        <p className="text-muted mt-2">(ns2p, ns2l, ns3f, ns3l)</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                            <Col>
                                                <Media className="">
                                                    <img
                                                        width={48}
                                                        height={48}
                                                        className="align-self-center mr-3"
                                                        src={nordLogoProgramBundle}
                                                        alt="logo"
                                                    />
                                                    <Media.Body>
                                                        <h6 className="mb-2 text-muted">Program Bundle Files (*)</h6>
                                                        <p className="text-muted mt-2">(ns2pb, ns3fb)</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col md={4}>
                                                <Media className="">
                                                    <img
                                                        width={48}
                                                        height={48}
                                                        className="align-self-center mr-3"
                                                        src={nordLogoSynth}
                                                        alt="logo"
                                                    />
                                                    <Media.Body>
                                                        <h6 className="mb-2 text-muted">Synth Files</h6>
                                                        <p className="text-muted mt-2">(ns2s, ns3y)</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                            <Col>
                                                <Media className="">
                                                    <img
                                                        width={48}
                                                        height={48}
                                                        className="align-self-center mr-3"
                                                        src={nordLogoSynthBundle}
                                                        alt="logo"
                                                    />
                                                    <Media.Body>
                                                        <h6 className="mb-2 text-muted">Synth Bundle Files (*)</h6>
                                                        <p className="text-muted mt-2">(ns2synthpb, ns3synthpb)</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col md={4} />
                                            <Col md="auto">
                                                <Media className="">
                                                    <img
                                                        width={48}
                                                        height={48}
                                                        className="align-self-center mr-3"
                                                        src={nordLogoListBundle}
                                                        alt="logo"
                                                    />
                                                    <Media.Body>
                                                        <h6 className="mb-2 text-muted">Song Bundle Files (*)</h6>
                                                        <p className="text-muted mt-2">(ns3sbundle)</p>
                                                    </Media.Body>
                                                </Media>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col md={4} />
                                            <Col md="auto">
                                                <Media className="">
                                                    <img
                                                        width={48}
                                                        height={48}
                                                        className="align-self-center mr-3"
                                                        src={nordLogoBackup}
                                                        alt="logo"
                                                    />
                                                    <Media.Body>
                                                        <h6 className="mb-2 text-muted">Backup Files (*)</h6>
                                                        <p className="text-muted mt-2">(ns2b, ns2exb, ns3b)</p>
                                                    </Media.Body>
                                                </Media>

                                                <small className="text-muted mt-2">
                                                    (*) samples are not loaded from bundle/backup files to improve
                                                    loading time
                                                </small>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card className="border-0 text-muted">
                                    <Card.Body>
                                        <Card.Subtitle className="mt-3">Disclaimer</Card.Subtitle>

                                        <Card.Text>
                                            We are not affiliated, associated, endorsed by, or in any way officially
                                            connected with{" "}
                                            <a onClick={() => openUrl(nordUrl)} className="btn-link pointer">
                                                Nord Keyboards / Clavia DMI AB
                                            </a>
                                            , or any of its subsidiaries or its affiliates. The names Nord and Clavia as
                                            well as related names, marks, emblems and images are registered trademarks
                                            of their respective owners.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
