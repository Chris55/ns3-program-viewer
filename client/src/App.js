import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import FileUploaderButton from "./components/file-uploader-button";
import axios from "axios";
import programIcon from "./nprog.icns.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import JSONTree from "react-json-tree";
import Ns3 from "./components/ns3/ns3";
import "./components/ns3-panel-component-jqx.css";

import { ns3ModelProd } from "./components/ns3/model-prod";
import { ns3ModelDev } from "./components/ns3/model-dev";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: process.env.NODE_ENV === "production" ? ns3ModelProd : ns3ModelDev,
            error: null,
        };
    }

    onSuccess = (data) => {
        //console.log("success: ", data);
        if (data.success) {
            this.setState({ data: data.data, error: null });
        } else {
            this.setState({ error: data.error });
        }
    };

    onError = (err) => {
        this.setState({ error: err.error });
        toast.error(this.state.error);
    };

    handleFile = async (filename) => {
        const formData = new FormData();
        formData.append("nordFile", filename);
        await axios
            .post("api/upload", formData, {})
            .then((res) => {
                this.onSuccess(res.data);
            })
            .catch((err) => {
                this.onError(err.response.data);
            });
    };

    render() {
        return (
            <div className="app">
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                    <Container>
                        <h1 className="display-5">Online Nord Stage 3 Program File Viewer</h1>
                        <p className="lead">Simple online tool to review Nord Stage 3 program file settings.</p>

                        <blockquote className="blockquote">
                            <footer className="blockquote-footer">
                                Handmade by NUF Members
                                {/*<a href="https://www.norduserforum.com/portal.php">Handmade by NUF Members</a>*/}
                            </footer>
                        </blockquote>

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
                    <div className="row ">
                        <div className="col-2-auto align-self-center">
                            <FileUploaderButton className="" title="Select" handleFile={this.handleFile} />
                        </div>

                        <div className="col-auto align-self-center">Nord Program File (*.ns3f)</div>

                        <div className="col-auto align-self-center">
                            <Figure.Image width={64} height={64} alt="171x180" src={programIcon} />
                        </div>
                    </div>
                </Container>

                <Tabs id="uncontrolled-tab-example">
                    {/*style={{backgroundColor: 'grey'}}*/}
                    <Tab eventKey="panel" title="Panel" disabled={false}>
                        <Ns3 data={this.state.data} />
                    </Tab>

                    <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                        <JSONTree
                            data={this.state.data}
                            hideRoot={true}
                            getItemString={(type, data, itemType, itemString) => <span></span>}
                            shouldExpandNode={(keyPath, data, level) => true}
                            theme={{
                                scheme: "custom",
                                author: "wimer hazenberg (http://www.monokai.nl)",
                                base00: "#343a40",
                                base01: "#383830",
                                base02: "#49483e",
                                base03: "#75715e",
                                base04: "#a59f85",
                                base05: "#f8f8f2",
                                base06: "#f5f4f1",
                                base07: "#f9f8f5",
                                base08: "#f92672",
                                base09: "#fd971f",
                                base0A: "#f4bf75",
                                base0B: "#a6e22e",
                                base0C: "#a1efe4",
                                base0D: "#66d9ef",
                                base0E: "#ae81ff",
                                base0F: "#cc6633",
                            }}
                            invertTheme={false}
                        />
                    </Tab>
                </Tabs>

                <ToastContainer />

                {/*<Navbar fixed="bottom"  expand="lg" bg="dark" variant="light">*/}
                {/*    Hello*/}
                {/*</Navbar>*/}
            </div>
        );
    }
}

export default App;
