import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import nordLogoProgram from "./assets/nord-logo-program.svg";
import nordLogoSynth from "./assets/nord-logo-synth.svg";
import AppName from "./AppName";
import { Card, Media } from "react-bootstrap";
import LoadButton from "./LoadButton";

const isElectron = /electron/i.test(navigator.userAgent);
console.log("Electron:", isElectron);

function Home(props) {
    return (
        <>
            <div className="mx-auto mt-3" style={{ width: "80vw" }}>
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                <AppName />
                            </h2>
                        </Card.Title>

                        <Card.Subtitle className="text-muted">
                            {isElectron ? "Offline" : "Online"} tool to review Nord Stage 2/2EX/3 program file settings.
                            Following files are supported:
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
                                    Nord Stage 2 Program File (ns2p)
                                    <br />
                                    Nord Stage 3 Program File (ns3f)
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
                                <h6 className="mb-2 text-muted">Synth File</h6>
                                <p className="text-muted mt-2">Nord Stage 3 Synth File (ns3y)</p>
                            </Media.Body>
                        </Media>
                    </Card.Body>
                </Card>

                <Card className="border-0">
                    <Card.Body>
                        <Card.Title>Let's get started</Card.Title>
                        <LoadButton loading={props.loading} loaded={props.loaded} handleFile={props.handleFile} />
                    </Card.Body>
                </Card>

                <Card className="border-0 text-muted">
                    <Card.Body>
                        <Card.Subtitle className="mt-5">Disclaimer</Card.Subtitle>

                        <Card.Text>
                            We are not affiliated, associated, endorsed by, or in any way officially connected with{" "}
                            <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>, or any of its
                            subsidiaries or its affiliates. The names Nord and Clavia as well as related names, marks,
                            emblems and images are registered trademarks of their respective owners.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            {/*<Row className="mt-4 mt-lg-5">*/}
            {/*    <Col xs={3} md={2} className="m-0 p-0">*/}
            {/*        /!*<img width={72} height={72} className="float-right p-0" src={appLogo} alt="logo" />*!/*/}
            {/*    </Col>*/}
            {/*    <Col xs={9} md={8}>*/}
            {/*        <h2>*/}
            {/*            <AppName />*/}
            {/*        </h2>*/}
            {/*        <p className="text-muted">*/}
            {/*            {isElectron ? "Offline" : "Online"} tool to review Nord Stage 2/2EX/3 program file settings.*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="">*/}
            {/*    <Col xs={3} md={2} className="m-0 p-0"></Col>*/}
            {/*    <Col xs={9} md={8}>*/}
            {/*        <h5 className="my-2">Let's get started</h5>*/}

            {/*        <LoadButton loading={props.loading} loaded={props.loaded} handleFile={props.handleFile} />*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="mt-5">*/}
            {/*    <Col xs={3} md={2} className="m-0 p-0"></Col>*/}
            {/*    <Col xs={9} md={8}>*/}
            {/*        <p className="text-muted mt-2">Supported Files:</p>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="mt-1 border">*/}
            {/*    <Col xs={3} md={2} className="m-0 p-0">*/}
            {/*        <img width={48} height={48} className="float-right p-0" src={nordLogoProgram} alt="prg" />*/}
            {/*    </Col>*/}
            {/*    <Col xs={9} md={8}>*/}
            {/*        <p className="text-muted mt-2">*/}
            {/*            Nord Stage 2 Program File (ns2p)*/}
            {/*            <br />*/}
            {/*            Nord Stage 3 Program File (ns3f)*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="">*/}
            {/*    <Col xs={3} md={2} className="m-0 p-0">*/}
            {/*        <img width={48} height={48} className="float-right p-0" src={nordLogoSynth} alt="prg" />*/}
            {/*    </Col>*/}
            {/*    <Col xs={9} md={8}>*/}
            {/*        <p className="text-muted mt-2">Nord Stage 3 Program File (ns3y)</p>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            {/*<div>*/}
            {/*    <Media className="ml-2 pl-2 ml-md-5 pl-md-5 mt-2 pt-2 mt-md-4 pt-md-4">*/}
            {/*        <img width={72} height={72} className="align-self-start mr-3" src={appLogo} alt="logo" />*/}
            {/*        <Media.Body>*/}
            {/*            <h2>*/}
            {/*                <AppName />*/}
            {/*            </h2>*/}
            {/*            <p className="text-muted">*/}
            {/*                {isElectron ? "Offline" : "Online"} tool to review Nord Stage 2/2EX/3 program file settings.*/}
            {/*            </p>*/}

            {/*            /!*<Media>*!/*/}
            {/*            /!*    <img*!/*/}
            {/*            /!*        width={24}*!/*/}
            {/*            /!*        height={24}*!/*/}
            {/*            /!*        className="align-self-center mr-3"*!/*/}
            {/*            /!*        src={nordLogoProgram}*!/*/}
            {/*            /!*        alt="prg"*!/*/}
            {/*            /!*    />*!/*/}
            {/*            /!*    <Media.Body>*!/*/}
            {/*            /!*        <p className="text-muted mt-2">*!/*/}
            {/*            /!*            Nord Stage 2 Program File (ns2p)*!/*/}
            {/*            /!*            <br />*!/*/}
            {/*            /!*            Nord Stage 3 Program File (ns3f)*!/*/}
            {/*            /!*        </p>*!/*/}
            {/*            /!*    </Media.Body>*!/*/}
            {/*            /!*</Media>*!/*/}

            {/*            /!*<Media>*!/*/}
            {/*            /!*    <img*!/*/}
            {/*            /!*        width={24}*!/*/}
            {/*            /!*        height={24}*!/*/}
            {/*            /!*        className="align-self-center mr-3"*!/*/}
            {/*            /!*        src={nordLogoSynth}*!/*/}
            {/*            /!*        alt="synth"*!/*/}
            {/*            /!*    />*!/*/}
            {/*            /!*    <Media.Body>*!/*/}
            {/*            /!*        <p className="text-muted mt-2">Nord Stage 3 Synth File (ns3y)</p>*!/*/}
            {/*            /!*    </Media.Body>*!/*/}
            {/*            /!*</Media>*!/*/}

            {/*            /!*<p className="text-muted">*!/*/}
            {/*            /!*    Free and Handmade by Nord User Forum{" "}*!/*/}
            {/*            /!*    <a*!/*/}
            {/*            /!*        rel="noopener noreferrer"*!/*/}
            {/*            /!*        target="_blank"*!/*/}
            {/*            /!*        href="https://www.norduserforum.com/nord-stage-3-programs-ns3p-ns3pb-files-f32/ns3-program-viewer-t19939.html"*!/*/}
            {/*            /!*    >*!/*/}
            {/*            /!*        members.*!/*/}
            {/*            /!*    </a>*!/*/}
            {/*            /!*</p>*!/*/}

            {/*            <p className="my-2">Let's get started</p>*/}

            {/*            <LoadButton loading={props.loading} loaded={props.loaded} handleFile={props.handleFile} />*/}

            {/*            /!*<p className="text-muted mt-3">Supported files</p>*!/*/}
            {/*        </Media.Body>*/}
            {/*    </Media>*/}

            {/*    <Media className="ml-2 pl-2 ml-md-5 pl-md-5 mt-1 pt-1 mt-md-2 pt-md-2">*/}
            {/*        <div className="ml-3">*/}
            {/*            <img*/}
            {/*                width={48}*/}
            {/*                height={48}*/}
            {/*                className="align-self-center mr-4"*/}
            {/*                src={nordLogoProgram}*/}
            {/*                alt="prg"*/}
            {/*            />*/}
            {/*        </div>*/}

            {/*        <Media.Body>*/}
            {/*            <p className="text-muted mt-2">*/}
            {/*                Nord Stage 2 Program File (ns2p)*/}
            {/*                <br />*/}
            {/*                Nord Stage 3 Program File (ns3f)*/}
            {/*            </p>*/}
            {/*        </Media.Body>*/}
            {/*    </Media>*/}

            {/*    <Media className="ml-2 pl-2 ml-md-5 pl-md-5 mt-1 pt-1">*/}
            {/*        <div className="ml-3">*/}
            {/*            <img*/}
            {/*                width={48}*/}
            {/*                height={48}*/}
            {/*                className="align-self-center mr-4"*/}
            {/*                src={nordLogoSynth}*/}
            {/*                alt="synth"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <Media.Body>*/}
            {/*            <p className="text-muted mt-2">Nord Stage 3 Synth File (ns3y)</p>*/}
            {/*        </Media.Body>*/}
            {/*    </Media>*/}

            {/*        <Media className="bg-light p-5 text-muted mt-5">*/}
            {/*            <Media.Body>*/}
            {/*                <p className="f">*/}
            {/*                    We are not affiliated, associated, endorsed by, or in any way officially connected with{" "}*/}
            {/*                    <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>, or any of*/}
            {/*                    its subsidiaries or its affiliates.*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    The names Nord and Clavia as well as related names, marks, emblems and images are*/}
            {/*                    registered trademarks of their respective owners.*/}
            {/*                </p>*/}
            {/*            </Media.Body>*/}
            {/*        </Media>*/}

            {/*</div>*/}
        </>
    );
}

export default Home;
