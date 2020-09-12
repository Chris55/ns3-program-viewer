import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";

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
                                        {organ.type} {organ.preset1.label} - {organ.preset2.label}{" "}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <div className={organ.vibrato.enabled ? "nord-option-on" : "nord-option-off"}>
                                        <small>{vibratoChorusTitle}</small>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <div className={organ.vibrato.enabled ? "nord-option-on" : "nord-option-off"}>
                                        <small>Type </small>
                                        <strong>{organ.vibrato.mode}</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <div className={organ.percussion.enabled ? "nord-option-on" : "nord-option-off"}>
                                        <small>Percussion</small>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <div className={organ.percussion.volumeSoft ? "nord-option-on" : "nord-option-off"}>
                                        <small>Volume Soft {organ.percussion.volumeSoft}</small>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className={organ.percussion.decayFast ? "nord-option-on" : "nord-option-off"}>
                                        <small>Decay Fast {organ.percussion.decayFast}</small>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div
                                        className={
                                            organ.percussion.harmonicThird ? "nord-option-on" : "nord-option-off"
                                        }
                                    >
                                        <small>Harmonic Third {organ.percussion.harmonicThird}</small>
                                    </div>
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
