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
import { ns2Model } from "./components/ns2/model/ns2-model";
import NordDevice from "./components/nord-device";
import Button from "react-bootstrap/Button";
const clonedeep = require("lodash.clonedeep");

class App extends Component {
    constructor(props) {
        super(props);

        this.production = process.env.NODE_ENV === "production";

        if (this.production) {
            ns2Model.slotA.enabled = false;
            ns2Model.slotB.enabled = false;
        }
        this.state = {
            loaded: false,
            data: ns2Model,
            originalData: clonedeep(ns2Model),
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
            newData.name += " - (All Instruments Visible)";
            const panelA = newData.panelA || newData.slotA;
            const panelB = newData.panelB || newData.slotB;

            panelA.organ.dimmed = !panelA.enabled || !panelA.organ.enabled;
            panelA.piano.dimmed = !panelA.enabled || !panelA.piano.enabled;
            panelA.synth.dimmed = !panelA.enabled || !panelA.synth.enabled;
            panelA.extern.dimmed = !panelA.enabled || !panelA.extern.enabled;

            panelA.enabled = true;
            panelA.organ.enabled = true;
            panelA.piano.enabled = true;
            panelA.synth.enabled = true;
            panelA.extern.enabled = true;

            panelB.organ.dimmed = !panelB.enabled || !panelB.organ.enabled;
            panelB.piano.dimmed = !panelB.enabled || !panelB.piano.enabled;
            panelB.synth.dimmed = !panelB.enabled || !panelB.synth.enabled;
            panelB.extern.dimmed = !panelB.enabled || !panelB.extern.enabled;

            panelB.enabled = true;
            panelB.organ.enabled = true;
            panelB.piano.enabled = true;
            panelB.synth.enabled = true;
            panelB.extern.enabled = true;

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
