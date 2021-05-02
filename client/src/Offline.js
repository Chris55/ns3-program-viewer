import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AppName from "./AppName";

class Privacy extends Component {
    render() {
        return (
            <div className="mx-auto mt-3" style={{ width: "80vw" }}>
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title>Offline Version</Card.Title>

                        <Card.Text>
                            <AppName/> is also available as an offline and standalone application. In this version, everything is running locally, nothing is send to a remote server. Installer are available for
                            MacOS, Windows, and Linux Distributions.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mt-1 border-0">
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">MacOS</Card.Subtitle>
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="logo_apple.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <p>
                                        MacOS Installer (minimum 10.14 - Mojave) is available on the{" "}
                                        <a href="https://apps.apple.com/app/id1549939673">App Store</a>, or from{" "}
                                        <a href="https://github.com/Chris55/ns3-program-viewer/releases">here</a>
                                    </p>
                                    <p>(expand Assets and select *.dmg file)</p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mt-1 border-0">
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Windows</Card.Subtitle>
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="logo_microsoft.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <p>
                                        Windows 10 Installer is available{" "}
                                        <a href="https://github.com/Chris55/ns3-program-viewer/releases">here</a>
                                    </p>
                                    <p>(expand Assets and select *.exe file)</p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mt-1 border-0">
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Linux Distributions</Card.Subtitle>
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img src="logo_linux.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <p>
                                        Installer is available for Debian/Ubuntu and Fedora/SUSE{" "}
                                        <a href="https://github.com/Chris55/ns3-program-viewer/releases">here</a>
                                    </p>
                                    <p>(expand Assets and select *.deb or *.rpm file)</p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Privacy;
