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
import { ns3Model } from "./components/ns3/model/ns3-model";
import NordDevice from "./components/nord-device";
import Button from "react-bootstrap/Button";
const clonedeep = require("lodash.clonedeep");

class App extends Component {
    constructor(props) {
        super(props);

        this.production = process.env.NODE_ENV === "production";

        if (this.production) {
            ns3Model.panelA.enabled = false;
            ns3Model.panelB.enabled = false;
        }
        this.state = {
            loaded: false,
            data: ns3Model,
            originalData: clonedeep(ns3Model),
            error: null,
            showAll: false,
        };
    }

    onSuccess = (data) => {
        //console.log("success: ", data);
        if (data.success) {
            this.setState({
                loaded: true,
                data: data.data,
                originalData: clonedeep(data.data),
                error: null,
                showAll: false,
            });
        } else {
            this.setState({ loaded: false, error: data.error, showAll: false });
        }
    };

    onError = (err) => {
        this.setState({ loaded: false, error: err.error, showAll: false });
        toast.error(this.state.error);
    };

    handleFile = async (filename) => {
        if (!filename) return;

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

    handleShowAll = () => {
        if (!this.state.showAll) {
            const newData = clonedeep(this.state.data);
            if (newData.panelA) {
                newData.name += " - (All Instruments Visible)";
                newData.panelA.enabled = true;
                newData.panelA.organ.enabled = true;
                newData.panelA.piano.enabled = true;
                newData.panelA.synth.enabled = true;
                newData.panelA.extern.enabled = true;
                newData.panelB.enabled = true;
                newData.panelB.organ.enabled = true;
                newData.panelB.piano.enabled = true;
                newData.panelB.synth.enabled = true;
                newData.panelB.extern.enabled = true;
            } else if (newData.slotA) {
                newData.slotA.enabled = true;
                newData.slotA.organ.enabled = true;
                newData.slotA.piano.enabled = true;
                newData.slotA.synth.enabled = true;
                newData.slotA.extern.enabled = true;
                newData.slotB.enabled = true;
                newData.slotB.organ.enabled = true;
                newData.slotB.piano.enabled = true;
                newData.slotB.synth.enabled = true;
                newData.slotB.extern.enabled = true;
            }
            this.setState((prevState) => ({
                showAll: true,
                data: newData,
            }));
        } else {
            this.setState((prevState) => ({
                showAll: false,
                data: clonedeep(prevState.originalData),
            }));
        }
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

                                <div className="col-auto align-self-center">
                                    Nord Stage 3 Program File (ns3f) <span className="work-complete" /> (100% decoded)
                                    <br />
                                    Nord Stage 2 Program File (ns2p) <span className="work-in-progress" /> (in progress){" "}
                                </div>

                                <div className="col-auto align-self-center">
                                    <Figure.Image width={64} height={64} alt="171x180" src={programIcon} />
                                </div>

                                <div className="col-auto align-self-center"/>

                                <div className="col-auto align-self-center">
                                    <div className={this.state.loaded ? "" : "d-none"}>
                                        <span className="mr-2">Show All Instruments</span>

                                        <Button
                                            type="button"
                                            variant="primary"
                                            className={this.state.showAll ? "mr-1 active" : "mr-1 disabled"}
                                            onClick={this.handleShowAll}
                                        >
                                            On
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="primary"
                                            className={this.state.showAll ? "mr-1 disabled" : "mr-1 active"}
                                            onClick={this.handleShowAll}
                                        >
                                            Off
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Container>

                        <NordDevice data={this.state.data} showAll={this.state.showAll} production={this.production} />
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
