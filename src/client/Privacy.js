import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppName from "./AppName";
import { useSelector } from "react-redux";
import { nordSelector } from "./features/nord/nord-slice-reducer";
import Handmade from "./Handmade";
import Footer from "./Footer";

const Privacy = () => {
    const { isElectron } = useSelector(nordSelector);

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
                                    <Card.Title>Privacy Policy</Card.Title>
                                    <ul>
                                        <li>We don’t log or share your personal information.</li>
                                        <li>We don’t track you.</li>
                                        <li>We don’t profile you.</li>
                                    </ul>
                                    {isElectron && (
                                        <Card.Text>
                                            Downloaded files are stored locally only, nothing is send to a remote
                                            server.
                                        </Card.Text>
                                    )}
                                    {!isElectron && (
                                        <Card.Text>
                                            Uploaded files are stored on the server for processing only and deleted
                                            every 24h.
                                        </Card.Text>
                                    )}

                                    <Card.Title className="text-muted  mt-5">About Cookies</Card.Title>

                                    <Card.Text className="mt-2">
                                        Good news: we removed all cookie banners from <AppName />! 🎉
                                    </Card.Text>
                                    <Card.Text>
                                        No one likes cookie banners. But cookie banners are everywhere. So how did we
                                        pull this off?
                                    </Card.Text>
                                    <Card.Text>
                                        Well, EU law requires you to use cookie banners if your website contains cookies
                                        that are not required for it to work. Common examples of such cookies are those
                                        used by third-party analytics, tracking, and advertising services. These
                                        services collect information about people’s behavior across the web, store it in
                                        their databases, and can use it to serve personalized ads.
                                    </Card.Text>
                                    <Card.Text>
                                        At <AppName />, we want to protect user privacy, and we find cookie banners
                                        quite irritating, so we decided to look for a solution. After a brief search, we
                                        found one: just don’t use any non-essential cookies. Pretty simple, really. 🤔
                                    </Card.Text>
                                    <Card.Text>
                                        So, we have removed all non-essential cookies from <AppName /> , and visiting
                                        our website does not send any information to third-party analytics services.
                                        (And of course <AppName /> still does not use any cookies to display ads, or
                                        track you across other sites.)
                                    </Card.Text>
                                    {/*<Card.Text>*/}
                                    {/*    We are also committing that going forward, we will only use cookies that are required for us to serve{" "}*/}
                                    {/*    <AppName />. <AppName /> has had a long history of prioritizing user privacy, often going above*/}
                                    {/*    and beyond any legal requirement, including extending EU privacy protections to all users*/}
                                    {/*    regardless of location. Users should not have to sacrifice their privacy to collaborate on*/}
                                    {/*    <AppName />. That’s all.*/}
                                    {/*</Card.Text>*/}
                                    <Card.Text>That’s all. Have a nice day!</Card.Text>
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

export default Privacy;
