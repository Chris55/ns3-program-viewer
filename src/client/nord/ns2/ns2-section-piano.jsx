import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import Ns2VolumeAndMore from "./ns2-volume-and-more";
import Ns2Fx from "./ns2-fx";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordValueOnOff from "../lib/nord-value-on-off";

export default class Ns2SectionPiano extends Component {
    render() {
        const piano = this.props.data;
        const visible = piano.enabled;
        const dimmed = piano.dimmed === true;

        return (
            <div className={visible ? this.props.className : "d-none"}>
                    <div className={dimmed ? "nord-dimmed" : "nord-on"}>
                        <div className="">
                            <div className="no-gutters d-flex flex-row flex-wrap align-items-stretch">
                                <div className="">
                                    <Ns2VolumeAndMore name={"PIANO"} data={piano} />
                                </div>

                                <div className="row no-gutters flex-column m-1">
                                    <div>
                                        {/*<div className="nord-name">{piano.name.value}</div>*/}
                                        <div className="nord-name">
                                            <div>{piano.name.value}</div>
                                            <div>
                                                <small>
                                                    {piano.name.info} {piano.name.version}
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <NordLabelAndValue label="Type" data={piano.type} />
                                        <span className={piano.clavinetModel.enabled ? "" : "d-none"}>
                                            {" "}
                                            <NordLabelAndValue data={piano.clavinetModel} />
                                        </span>
                                    </div>

                                    <div>
                                        <NordLabelAndValue
                                            enabled={piano.dynamics.value !== "0"}
                                            label="Dyn"
                                            data={piano.dynamics}
                                        />
                                        <span className="m-1" />
                                        <NordLabelAndValue
                                            enabled={piano.slotDetune.value !== "Off"}
                                            label="Slot Detune"
                                            data={piano.slotDetune}
                                        />
                                    </div>

                                    <div>
                                        <NordValueOnOff label="Long Release" data={piano.longRelease} />
                                        <span className="m-1" />
                                        <NordValueOnOff label="String Resonance" data={piano.stringResonance} />
                                        <span className="m-1" />
                                        <NordValueOnOff label="Pedal Noise" data={piano.pedalNoise} />
                                    </div>

                                    <div className={piano.clavinetModel.enabled ? "" : "d-none"}>
                                        <NordLabelAndValue
                                            enabled={piano.clavinetEq.value !== "Off"}
                                            label="Eq"
                                            data={piano.clavinetEq}
                                        />
                                        <span className="m-1" />
                                        <NordLabelAndValue
                                            enabled={piano.clavinetEqHi.value !== "Off"}
                                            label="Eq Hi"
                                            data={piano.clavinetEqHi}
                                        />
                                    </div>
                                </div>

                                <Ns2Fx className="" data={this.props.effects} source="Piano" menu={piano} />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
