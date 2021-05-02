import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import FileUploaderButton from "./utils/file-uploader-button";
import axios from "axios";
import programIcon from "./nprog.icns.svg";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import { ns3Model } from "./nord/ns3/model/ns3-model";
import NordDevice from "./nord/nord-device";
import Button from "react-bootstrap/Button";
import { buildExport } from "./export/export-pdf";
import {Card} from "react-bootstrap";

const clonedeep = require("lodash.clonedeep");

const isElectron = /electron/i.test(navigator.userAgent);
console.log("Electron:", isElectron);

class AppOld extends Component {
    constructor(props) {
        super(props);

        this.title = ""; //`v${process.env.REACT_APP_VERSION}`;
        this.production = process.env.NODE_ENV === "production";

        if (this.production) {
            if (ns3Model.slotA) {
                ns3Model.slotA.enabled = false;
                ns3Model.slotB.enabled = false;
            }
            if (ns3Model.panelA) {
                ns3Model.panelA.enabled = false;
                ns3Model.panelB.enabled = false;
            }
        }
        this.state = {
            loaded: false,
            loading: false,
            data: [ns3Model],
            originalData: clonedeep([ns3Model]),
            error: null,
            showAll: false,
            exporting: false,
            exportDetails: "",
        };
    }

    onSuccess = (data) => {
        //console.log("success: ", data);
        if (data.success) {
            this.setState({
                loaded: true,
                loading: false,
                data: data.data,
                originalData: clonedeep(data.data),
                error: null,
                showAll: false,
            });
        } else {
            this.onError(data);
        }
    };

    onError = (err) => {
        this.setState({ loaded: false, loading: false, error: err.error, showAll: false });
        toast.error(this.state.error);
    };

    handleFile = async (files) => {
        if (!files) return;

        this.setState({ loading: true });

        if (isElectron) {
            try {
                const bundle = [];
                for (const file of files) {
                    bundle.push({
                        path: file.path,
                        name: file.name,
                    });
                }
                const response = await window.electron.downloadFiles(bundle);
                this.onSuccess(response);
            } catch (e) {
                this.onError({ error: e.message });
            }
            return;
        }

        const formData = new FormData();
        for (const file of files) {
            formData.append("nordFiles", file);
        }

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
            for (const item of newData) {
                if (item.ext === "ns3f" || item.ext === "ns2p") {
                    item.name += " - (All Instruments Visible)";
                    const panelA = item.panelA || item.slotA;
                    const panelB = item.panelB || item.slotB;

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
                }
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

    handleExport = () => {
        const callback = (name) => {
            this.setState({ exportDetails: name });
        };
        this.setState({ exporting: true }, async () => {
            await buildExport(this.state.data, this.state.showAll, callback).catch((e) => toast.error(e.message));
            this.setState({ exporting: false });
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
                                <p className="lead">
                                    {isElectron ? "Offline" : "Online"} tool to review Nord Stage 2/2EX/3 program file
                                    settings.
                                </p>

                                <blockquote className="blockquote">
                                    <footer className="blockquote-footer">
                                        {this.title} Handmade by Nord User Forum{" "}
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://www.norduserforum.com/nord-stage-3-programs-ns3p-ns3pb-files-f32/ns3-program-viewer-t19939.html"
                                        >
                                            members
                                        </a> - version {process.env.REACT_APP_VERSION}
                                    </footer>
                                </blockquote>
                            </Container>
                        </div>

                        <Container>
                            <div className="row ">
                                <div className="col-2-auto align-self-center">
                                    <FileUploaderButton
                                        className=""
                                        title={this.state.loading ? "Loading..." : "Select"}
                                        disabled={this.state.loading}
                                        accept=".ns3f,.ns3y,.ns2p"
                                        multiple={true}
                                        handleFile={this.handleFile}
                                    />
                                </div>

                                {/*<div className="col-auto align-self-center">*/}
                                {/*    Nord Stage 3 Program File (ns3f) <span className="work-complete" /> (100% decoded)*/}
                                {/*    <br />*/}
                                {/*    Nord Stage 2 Program File (ns2p) <span className="work-in-progress" /> (in progress){" "}*/}
                                {/*</div>*/}

                                <div className="col-auto align-self-center">
                                    Nord Stage 3 Program File (ns3f, ns3y)
                                    <br />
                                    Nord Stage 2 Program File (ns2p)
                                </div>

                                <div className="col-auto align-self-center mt-sm-2">
                                    <Figure.Image width={64} height={64} alt="171x180" src={programIcon} />
                                </div>

                                {this.state.loaded && (
                                    <>
                                        <div className="col-auto align-self-center" />

                                        <div className="col-auto align-self-center">
                                            <span className="mr-2">Show All Instruments</span>

                                            <Button
                                                type="button"
                                                variant="primary"
                                                className={this.state.showAll ? "mr-1" : "mr-1 disabled"}
                                                //className="mr-1"
                                                //disabled={!this.state.showAll}
                                                onClick={this.handleShowAll}
                                            >
                                                On
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="primary"
                                                className={this.state.showAll ? "mr-1 disabled" : "mr-1"}
                                                //className="mr-1"
                                                //disabled={this.state.showAll}
                                                onClick={this.handleShowAll}
                                            >
                                                Off
                                            </Button>
                                        </div>

                                        <div className="col-auto align-self-center" />

                                        <div className="col-auto align-self-center">
                                            <Button
                                                type="button"
                                                variant="primary"
                                                //className={this.state.exporting ? "disabled" : "active"}
                                                disabled={this.state.exporting}
                                                onClick={this.handleExport}
                                            >
                                                {this.state.exporting ? "Saving " + this.state.exportDetails : "Save"}
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </Container>

                        <NordDevice data={this.state.data} showAll={this.state.showAll} production={this.production} />
                    </div>

                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>Footer</Card.Footer>
                    </Card>
                    <div className="nord-footer">
                        <small>
                            <div>
                                Privacy Policy: We don’t log or share your personal information. We don’t track you. We
                                don’t profile you.
                                {isElectron && (
                                    <span>
                                        {" "}
                                        Downloaded files are stored locally only, nothing is send to a remote server.
                                    </span>
                                )}
                                {!isElectron && (
                                    <span>
                                        {" "}
                                        Uploaded files are stored on the server for processing only and deleted every
                                        24h.
                                    </span>
                                )}
                            </div>
                            <div>
                                Disclaimer: We are not affiliated, associated, endorsed by, or in any way officially
                                connected with{" "}
                                <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>, or any of
                                its subsidiaries or its affiliates.
                            </div>
                            <div>
                                The names Nord and Clavia as well as related names, marks, emblems and images are
                                registered trademarks of their respective owners.
                            </div>
                        </small>
                    </div>

                    <ToastContainer />
                </div>
            </>
        );
    }
}

export default App;