import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AppName from "./AppName";

class About extends Component {
    render() {
        return (
            <div className="mx-auto mt-3" style={{ width: "80vw" }}>
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title>About</Card.Title>

                        <Card.Text>
                            <AppName/> is a free and handmade application developed by Nord User Forum members,
                            more details{" "}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.norduserforum.com/nord-stage-3-programs-ns3p-ns3pb-files-f32/ns3-program-viewer-t19939.html"
                            >
                                here
                            </a>
                            . This is an online collaboration, and we put a huge amount of effort into this viewer to be accurate, feel
                            free to contact us if something is wrong.
                        </Card.Text>

                        <Card.Text>
                            To clarify <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>{" "}
                            position regarding this publication, we contacted them. Answer from the support:
                        </Card.Text>

                        <blockquote className="m-3 blockquote">
                            <footer className="blockquote-footer text-muted">
                                I talked to the guys here, and it is fine with us for you to proceed with this project -
                                as long as you accompany your published work with a disclaimer that Clavia in no way is
                                affiliated with it. We will not be able to provide any assistance with this, but good
                                luck nonetheless!
                                <br />
                                <br />
                                @Clavia Support.
                            </footer>
                        </blockquote>

                        <Card.Title className="mt-5">Contributors</Card.Title>

                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/christian-florentz-b2530575/">
                                    Christian Florentz
                                </a>{" "}
                                (@florence)
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/andreas-gallenmueller-0b09721/">
                                    Andreas Gallenmueller
                                </a>{" "}
                                (@gaaal)
                            </li>
                            <li>Thanks to other NUF members: @cookie, @gordon, @rpossemo, @hobster</li>
                        </ul>

                        <Card.Title className="mt-5">Disclaimer</Card.Title>

                        <Card.Text>
                            We are not affiliated, associated, endorsed by, or in any way officially connected with{" "}
                            <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>, or any of its
                            subsidiaries or its affiliates.
                        </Card.Text>
                        <Card.Text>
                            The names Nord and Clavia as well as related names, marks, emblems and images are registered
                            trademarks of their respective owners.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body className="text-muted border-0">
                        <Card.Text>
                            <AppName/> (c) {new Date().getFullYear()} Christian Florentz
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default About;
