import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";

export default class Ns3Synth extends Component {
    render() {
        const synth = this.props.data;
        const visible = synth.enabed;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : 'row nord-off"'}>
                    <div className={this.props.className}>
                        <div className="col-auto text-center">
                            <Ns3VolumeAndMore name={"SYNTH"} data={synth} />
                        </div>

                        <div className="col-auto align-self-lg-auto">
                            <div className="nord-name">{synth.name}</div>

                            <div>
                                <div>
                                    <span className="nord-option-on">
                                        <small>Type {synth.type}</small>
                                    </span>

                                    <span> </span>

                                    <span className={synth.timbre !== "None" ? "nord-option-on" : "nord-option-off"}>
                                        <small>Timbre {synth.timbre}</small>
                                    </span>
                                </div>

                                <div>
                                    <span className={synth.softRelease ? "nord-option-on" : "nord-option-off"}>
                                        <small>Soft Release</small>
                                    </span>

                                    <span> </span>

                                    <span
                                        className={`nord-option ${
                                            synth.stringResonance ? "nord-option-on" : "nord-option-off"
                                        }`}
                                    >
                                        <small>String Resonance</small>
                                    </span>

                                    <span> </span>

                                    <span className={synth.pedalNoise ? "nord-option-on" : "nord-option-off"}>
                                        <small>Pedal Noise</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
