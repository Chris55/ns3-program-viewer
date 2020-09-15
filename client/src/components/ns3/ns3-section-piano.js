import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./lib/ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";

export default class Ns3SectionPiano extends Component {
    render() {
        const piano = this.props.data;
        const visible = piano.enabled;

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "nord-on" : "nord-off"}>
                        <div className="">
                            <div className="row no-gutters">
                                <div className="d-flex">
                                    <Ns3VolumeAndMore name={"PIANO"} data={piano} />
                                </div>

                                <div className="row no-gutters d-flex flex-wrap">
                                    <div className="row no-gutters flex-column m-1">
                                        <div>
                                            <div className="nord-name">{piano.name.value}</div>
                                        </div>

                                        <div>
                                            <Ns3LabelAndValue label="Type" data={piano.type} />
                                            <span className="m-1" />
                                            <Ns3LabelAndValue
                                                enabled={piano.timbre.value !== "None"}
                                                label="Timbre"
                                                data={piano.timbre}
                                            />
                                        </div>

                                        <div>
                                            <Ns3LabelAndValue
                                                enabled={piano.kbTouch.value !== "Normal"}
                                                label="KB Touch"
                                                data={piano.kbTouch}
                                            />
                                            <span className="m-1" />
                                            <Ns3LabelAndValue
                                                enabled={piano.layerDetune.value !== "Off"}
                                                label="Layer Detune"
                                                data={piano.layerDetune}
                                            />
                                        </div>

                                        <div>
                                            <Ns3ValueOnOff label="Soft Release" data={piano.softRelease} />
                                            <span className="m-1" />
                                            <Ns3ValueOnOff label="String Resonance" data={piano.stringResonance} />
                                            <span className="m-1" />
                                            <Ns3ValueOnOff label="Pedal Noise" data={piano.pedalNoise} />
                                        </div>
                                    </div>

                                    <Ns3Fx className="d-flex" data={this.props.effects} source="Piano" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
