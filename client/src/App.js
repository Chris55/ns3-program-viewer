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
import Figure from "react-bootstrap/Figure";
import JsonViewer from "react-json-view"


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: { },
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
                        <p className="lead">Simple online tool to review Nord Stage 3 program file settings.</p>

                        {/*<hr className="my-4"/>*/}

                        {/*<blockquote className="blockquote">*/}
                        {/*    If you want something done, do it yourself... As this feature is not implemented in the official Nord Sound Manager, I decided to*/}
                        {/*    implement it myself.*/}
                        {/*    <footer className="blockquote-footer">*/}
                        {/*        This site is not affiliated with Clavia / Nord.*/}
                        {/*        Information is provided "as is" without warranty of any kind. All written content on*/}
                        {/*        this site is for information purposes only.*/}
                        {/*    </footer>*/}
                        {/*</blockquote>*/}
                        {/*<p><a href="https://www.brainyquote.com/quotes/napoleon_bonaparte_108864" className="font-italic stretched-link">If you want something done, do it yourself</a>*/}
                        {/*</p>*/}
                    </Container>
                </div>

                <Container>

                    <Row className="" >
                        <Col sm={2} className="align-self-center">
                            <FileUploaderButton
                                className=""
                                title="Select"
                                handleFile={this.handleFile}/>
                        </Col>

                        <Col sm={2} className="align-self-center">
                            Nord Program File  (*.ns3f)
                        </Col>

                        <Col sm={4} className="align-self-center">
                                <Figure.Image
                                    width={64}
                                    height={64}
                                    alt="171x180"
                                    src={programIcon}
                                />
                        </Col>

                    </Row>

                    <Row className="mt-5">
                        <Col sm={12}>
                            <Tabs defaultActiveKey="debug" id="uncontrolled-tab-example">

                                <Tab eventKey="debug" title="File Properties" disabled={false}>
                                    <pre className="text-monospace">
                                        <Ns3ProgramListingComponent data={this.state.data}/>
                                    </pre>
                                </Tab>


                                {/*<Tab eventKey="debug" title="File Properties" disabled={false}>*/}
                                {/*    <JsonViewer*/}
                                {/*        src={this.state.data}*/}
                                {/*        theme="ashes"*/}
                                {/*        collapsed={false}*/}
                                {/*        enableClipboard={true}*/}
                                {/*        displayObjectSize={false}*/}

                                {/*        name={"ns3f"}*/}
                                {/*        displayDataTypes={false}*/}
                                {/*        indentWidth={4}*/}
                                {/*    />*/}
                                {/*</Tab>*/}
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
