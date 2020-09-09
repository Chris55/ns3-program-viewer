import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";

export default class Ns3Piano extends Component {
    render() {
        const piano = this.props.data;

        return (
            <React.Fragment>
                <Row className={piano.enabled ? "nord-on" : "nord-off"}>
                    <Ns3VolumeAndMore name={"PIANO"} data={piano} />

                    <Col sm={8} className="align-self-lg-auto">
                        <div className="nord-name">{piano.name}</div>

                        <div>
                            <div>
                                <span className="nord-option-on">
                                    <small>Type {piano.type}</small>
                                </span>

                                <span> </span>

                                <span className={piano.timbre !== "None" ? "nord-option-on" : "nord-option-off"}>
                                    <small>Timbre {piano.timbre}</small>
                                </span>
                            </div>

                            <div>
                                <span className={piano.kbTouch !== "Normal" ? "nord-option-on" : "nord-option-off"}>
                                    <small>KB Touch {piano.kbTouch}</small>
                                </span>

                                <span> </span>

                                <span className={piano.layerDetune !== "Off" ? "nord-option-on" : "nord-option-off"}>
                                    <small>Layer Detune {piano.layerDetune}</small>
                                </span>
                            </div>

                            <div>
                                <span className={piano.softRelease ? "nord-option-on" : "nord-option-off"}>
                                    <small>Soft Release</small>
                                </span>

                                <span> </span>

                                <span
                                    className={`nord-option ${
                                        piano.stringResonance ? "nord-option-on" : "nord-option-off"
                                    }`}
                                >
                                    <small>String Resonance</small>
                                </span>

                                <span> </span>

                                <span className={piano.pedalNoise ? "nord-option-on" : "nord-option-off"}>
                                    <small>Pedal Noise</small>
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <small>
                                {piano.morph.map((m) => (
                                    <div>
                                        <div className={m.morph.morph.wheel.enabled ? "nord-option-on" : "d-none"}>
                                            {m.name} Morph Wheel from {m.morph.label} to {m.morph.morph.wheel.to.label}
                                        </div>
                                        <div className={m.morph.morph.afterTouch.enabled ? "nord-option-on" : "d-none"}>
                                            {m.name} Morph After Touch from {m.morph.label} to{" "}
                                            {m.morph.morph.afterTouch.to.label}
                                        </div>
                                        <div
                                            className={
                                                m.morph.morph.controlPedal.enabled ? "nord-option-on dot-green" : "d-none"
                                            }
                                        >
                                            Control Pedal {m.name} from {m.morph.label} to{" "}
                                            {m.morph.morph.controlPedal.to.label}
                                        </div>
                                    </div>
                                ))}
                            </small>
                        </div>
                    </Col>


                </Row>
            </React.Fragment>
        );
    }
}
