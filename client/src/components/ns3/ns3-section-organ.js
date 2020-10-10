import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./lib/ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";
import NordValueOnOff from "./lib/nord-value-on-off";
import NordLabelAndValue from "./lib/nord-label-and-value";
import NordLabel from "./lib/nord-label";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";

export default class Ns3SectionOrgan extends Component {
    render() {
        const organ = this.props.data;
        const visible = organ.enabled;
        const vibratoChorusTitle =
            organ.vibrato.mode.length > 1 && organ.vibrato.mode.charAt(0) === "V" ? "Vibrato" : "Chorus";

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "nord-on" : "nord-off"}>
                        <div className="">
                            <div className="row no-gutters">
                                <div className="d-flex">
                                    <Ns3VolumeAndMore name={"ORGAN"} data={organ} />
                                </div>

                                <div className="row no-gutters d-flex flex-wrap">
                                    <div className="row no-gutters flex-column m-1">
                                        <div>
                                            {/*<div className="nord-name">*/}
                                            {/*    {organ.type.value} {organ.preset1.value} - {organ.preset2.value}{" "}*/}
                                            {/*</div>*/}
                                            <div className="nord-name">
                                                <table>
                                                    <tbody>
                                                        <NordLabelAndValueWithMorph
                                                            label="Preset I"
                                                            data={organ.preset1}
                                                            valueClass="nord-font-monospace"
                                                        />
                                                        <NordLabelAndValueWithMorph
                                                            label="Preset II"
                                                            data={organ.preset2}
                                                            valueClass="nord-font-monospace"
                                                        />
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <NordLabelAndValue
                                                label="Model"
                                                data={organ.type}
                                            />
                                        </div>

                                        <div>
                                            <NordLabel enabled={organ.vibrato.enabled} label={vibratoChorusTitle} />
                                        </div>

                                        <div>
                                            <NordLabelAndValue
                                                label="Type"
                                                enabled={organ.vibrato.enabled}
                                                data={organ.vibrato.mode}
                                            />
                                        </div>

                                        <div>
                                            <NordValueOnOff label="Percussion" data={organ.percussion} />
                                        </div>
                                        <div>
                                            <NordValueOnOff label="Volume Soft" data={organ.percussion.volumeSoft} />
                                            <span className="m-1" />

                                            <NordValueOnOff label="Decay Fast" data={organ.percussion.decayFast} />
                                            <span className="m-1" />

                                            <NordValueOnOff
                                                label="Harmonic Third"
                                                data={organ.percussion.harmonicThird}
                                            />
                                        </div>
                                    </div>

                                    <Ns3Fx className="d-flex" data={this.props.effects} source="Organ" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
