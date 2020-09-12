import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";

export default class Ns3SectionPiano extends Component {
    render() {
        const piano = this.props.data;
        const visible = piano.enabled;

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "row nord-on" : "row nord-off"}>
                        <div className="col-auto text-center">
                            <Ns3VolumeAndMore name={"PIANO"} data={piano} />
                        </div>

                        <div className="col-auto">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="nord-name">{piano.name}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto nord-option-on">
                                    <small>Type </small>
                                    <strong>{piano.type}</strong>
                                </div>

                                <div
                                    className={
                                        piano.timbre !== "None" ? "col-auto nord-option-on" : "col-auto nord-option-off"
                                    }
                                >
                                    <small>Timbre </small>
                                    <strong>{piano.timbre}</strong>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <div className={piano.kbTouch !== "Normal" ? "nord-option-on" : "nord-option-off"}>
                                        <small>KB Touch {piano.kbTouch}</small>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className={piano.layerDetune !== "Off" ? "nord-option-on" : "nord-option-off"}>
                                        <small>Layer Detune {piano.layerDetune}</small>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <div className={piano.softRelease ? "nord-option-on" : "nord-option-off"}>
                                        <small>Soft Release</small>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div
                                        className={`nord-option ${
                                            piano.stringResonance ? "nord-option-on" : "nord-option-off"
                                        }`}
                                    >
                                        <small>String Resonance</small>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div className={piano.pedalNoise ? "nord-option-on" : "nord-option-off"}>
                                        <small>Pedal Noise</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Ns3Fx data={this.props.effects} source="Piano" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
