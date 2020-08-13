import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Ns3ProgramListingComponent from "./components/ns3-program-listing-component";
import FileUploaderButton from "./components/file-uploader-button";
import axios from "axios";
import programIcon from "./nprog.icns.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            error: null
        }
    }

    onSuccess = (data) => {
        //console.log("success: ", data);
        this.setState({data: data, error: null});
    }

    onError = (err) => {
        this.setState({data: null, error: err});
        toast.error(this.state.error);
    }

    handleFile = async (filename) => {
        const formData = new FormData()
        formData.append('nordFile', filename)
        await axios.post("api/upload", formData, {})
            .then(res => {
                this.onSuccess(res.data);
            })
            .catch((err) => {
                this.onError(err.response.data);
            });
    }

    render() {
        return (
            <div className="app">
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                    <Container>
                        <h1 className="display-5">Online Nord Stage 3 Program File Viewer</h1>
                        <p className="lead">Simple online tool to review Nord Stage 3 program file. </p>

                        <hr className="my-4"/>

                        <blockquote className="blockquote">
                            <footer className="blockquote-footer">
                                As this feature is not implemented in the official Nord Sound Manager, I decided to
                                implement it myself.
                                This site is not affiliated with Clavia / Nord.
                                Information is provided "as is" without warranty of any kind. All written content on
                                this site is for information purposes only.

                                If you want something done, do it yourself.
                            </footer>
                        </blockquote>
                        {/*<p><a href="https://www.brainyquote.com/quotes/napoleon_bonaparte_108864" className="font-italic stretched-link">If you want something done, do it yourself</a>*/}
                        {/*</p>*/}
                    </Container>
                </div>

                <Container fluid>

                    <Row className="m-2">
                        <Col sm={1}>
                            <img src={programIcon} className="img-fluid" alt="Nord Program"/>
                        </Col>
                        <Col sm={4}>
                            <h5 >NS3 Program File (*.ns3f)</h5>

                        </Col>
                        <Col sm={1}>
                            <FileUploaderButton
                                title="Select"
                                handleFile={this.handleFile}/>
                        </Col>
                    </Row>

                    <Row className="m-2">
                        <Col sm={12}>
                            <Tabs defaultActiveKey="debug" id="uncontrolled-tab-example">
                                <Tab eventKey="panel" title="Panel">

                                </Tab>
                                <Tab eventKey="debug" title="Debug">
                                    <pre className="text-monospace">
                                        <Ns3ProgramListingComponent data={this.state.data}/>
                                    </pre>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>

                </Container>
                <ToastContainer/>

                {/*<Navbar fixed="bottom"  expand="lg" bg="dark" variant="light">*/}
                {/*    Hello*/}
                {/*</Navbar>*/}
            </div>
        );
    }
}

export default App;
