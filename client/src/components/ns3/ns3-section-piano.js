import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordValueOnOff from "../lib/nord-value-on-off";

export default class Ns3SectionPiano extends Component {
    render() {
        const piano = this.props.data;
        const visible = piano.enabled;
        const dimmed = piano.dimmed === true;

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={dimmed ? "nord-dimmed" : "nord-on"}>
                        <div className="">
                            <div className="row no-gutters">
                                <div className="d-flex">
                                    <Ns3VolumeAndMore name={"PIANO"} data={piano} />
                                </div>

                                <div className="row no-gutters d-flex flex-wrap">
                                    <div className="row no-gutters flex-column m-1">
                                        <div>
                                            {/*<div className="nord-name">{piano.name.value}</div>*/}
                                            <div className="nord-name">
                                                <div >{piano.name.value}</div>
                                                <div ><small>{piano.name.info} {piano.name.version}</small></div>
                                            </div>
                                        </div>

                                        <div>
                                            <NordLabelAndValue label="Type" data={piano.type} />
                                            <span className="m-1" />
                                            <NordLabelAndValue
                                                enabled={piano.timbre.value !== "None"}
                                                label="Timbre"
                                                data={piano.timbre}
                                            />
                                        </div>

                                        <div>
                                            <NordLabelAndValue
                                                enabled={piano.kbTouch.value !== "Normal"}
                                                label="KB Touch"
                                                data={piano.kbTouch}
                                            />
                                            <span className="m-1" />
                                            <NordLabelAndValue
                                                enabled={piano.layerDetune.value !== "Off"}
                                                label="Layer Detune"
                                                data={piano.layerDetune}
                                            />
                                        </div>

                                        <div>
                                            <NordValueOnOff label="Soft Release" data={piano.softRelease} />
                                            <span className="m-1" />
                                            <NordValueOnOff label="String Resonance" data={piano.stringResonance} />
                                            <span className="m-1" />
                                            <NordValueOnOff label="Pedal Noise" data={piano.pedalNoise} />
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
