import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import FileUploaderButton from "./components/file-uploader-button";
import axios from "axios";
import programIcon from "./nprog.icns.svg";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import "./components/ns3-panel-component-jqx.css";
import { ns3Model } from "./components/ns3/model/ns3-model";
import NordDevice from "./components/nord-device";

class App extends Component {
    constructor(props) {
        super(props);

        this.production = process.env.NODE_ENV === "production";

        if (this.production) {
            ns3Model.panelA.enabled = false;
            ns3Model.panelB.enabled = false;
        }
        this.state = {
            data: ns3Model,
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
            <>
                <div className=" d-flex flex-column min-vh-100">
                    <div className=" flex-grow-1">
                        <div className="jumbotron jumbotron-fluid bg-dark text-white">
                            <Container>
                                <h1 className="display-5">
                                    <span className="nord-font">
                                        Nord<span className="nord-font-copyright">®</span> Stage
                                    </span>{" "}
                                    Program File Viewer
                                </h1>
                                <p className="lead">Online tool to review Nord Stage program file settings.</p>

                                <blockquote className="blockquote">
                                    <footer className="blockquote-footer">
                                        Handmade by Nord User Forum{" "}
                                        <a href="https://www.norduserforum.com/nord-stage-3-programs-ns3p-ns3pb-files-f32/ns3-program-viewer-t19939.html">
                                            Members
                                        </a>
                                    </footer>
                                </blockquote>
                            </Container>
                        </div>

                        <Container>
                            <div className="row ">
                                <div className="col-2-auto align-self-center">
                                    <FileUploaderButton
                                        className=""
                                        title="Select"
                                        accept=".ns3f,.ns2p"
                                        handleFile={this.handleFile}
                                    />
                                </div>

                                <div className="col-auto align-self-center">Nord Stage 3 Program File (ns3f) <span className="work-complete"></span> (100% decoded)<br/>Nord Stage 2 Program File (ns2p) <span className="work-in-progress"></span> (in progress) </div>

                                <div className="col-auto align-self-center">
                                    <Figure.Image width={64} height={64} alt="171x180" src={programIcon} />
                                </div>

                                <div className="col-auto align-self-center">

                                </div>
                            </div>
                        </Container>

                        <NordDevice data={this.state.data} production={this.production} />
                    </div>

                    <div className="nord-footer">
                        <small>
                            Disclaimer: We are not affiliated, associated, endorsed by, or in any way officially
                            connected with <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>,
                            or any of its subsidiaries or its affiliates.
                            <br />
                            The names Nord and Clavia as well as related names, marks, emblems and images are registered
                            trademarks of their respective owners.
                        </small>
                    </div>

                    <ToastContainer />
                </div>
            </>
        );
    }
}

export default App;
