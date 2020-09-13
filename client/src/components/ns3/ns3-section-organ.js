import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./lib/ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3Label from "./lib/ns3-label";

export default class Ns3SectionOrgan extends Component {
    render() {
        const organ = this.props.data;
        const visible = organ.enabled;
        const vibratoChorusTitle =
            organ.vibrato.mode.length > 1 && organ.vibrato.mode.charAt(0) === "V" ? "Vibrato" : "Chorus";

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "row nord-on" : "row nord-off"}>
                        <div className="col-auto text-center">
                            <Ns3VolumeAndMore name={"ORGAN"} data={organ} />
                        </div>

                        <div className="col-auto">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="nord-name">
                                        {organ.type.value} {organ.preset1.value} - {organ.preset2.value}{" "}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <Ns3Label enabled={organ.vibrato.enabled} label={vibratoChorusTitle} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <Ns3Label label="Type " />
                                    <Ns3LabelAndValue enabled={organ.vibrato.enabled} data={organ.vibrato.mode} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <Ns3ValueOnOff label="Percussion" data={organ.percussion} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <Ns3ValueOnOff label="Volume Soft" data={organ.percussion.volumeSoft} />
                                </div>
                                <div className="col-auto">
                                    <Ns3ValueOnOff label="Decay Fast" data={organ.percussion.decayFast} />
                                </div>

                                <div className="col-auto">
                                    <Ns3ValueOnOff label="Harmonic Third" data={organ.percussion.harmonicThird} />
                                </div>
                            </div>
                        </div>

                        <Ns3Fx data={this.props.effects} source="Organ" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
