import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";

export default class Ns3Organ extends Component {
    render() {
        const organ = this.props.data;
        const visible = organ.enabled;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : 'row nord-off"'}>
                    <div className={this.props.className}>
                        <div className="col-auto text-center">
                            <Ns3VolumeAndMore name={"ORGAN"} data={organ} />
                        </div>

                        <div className="col-auto align-self-lg-auto">
                            <div className="nord-name">
                                {organ.type} {organ.preset1.label} / {organ.preset2.label}{" "}
                            </div>

                            <div>
                                <div>
                                    <span className={organ.vibrato.enabled ? "nord-option-on" : "nord-option-off"}>
                                        <small>Vibrato</small>
                                    </span>

                                    <span className={organ.vibrato.enabled ? "nord-option-on" : "nord-option-off"}>
                                        <small>Type {organ.vibrato.mode}</small>
                                    </span>
                                </div>

                                <div>
                                    <span className={organ.percussion.enabled ? "nord-option-on" : "nord-option-off"}>
                                        <small>Percussion</small>
                                    </span>

                                    <span> </span>

                                    <span
                                        className={organ.percussion.volumeSoft ? "nord-option-on" : "nord-option-off"}
                                    >
                                        <small>Volume Soft {organ.percussion.volumeSoft}</small>
                                    </span>

                                    <span> </span>

                                    <span className={organ.percussion.decayFast ? "nord-option-on" : "nord-option-off"}>
                                        <small>Decay Fast {organ.percussion.decayFast}</small>
                                    </span>

                                    <span> </span>

                                    <span
                                        className={
                                            organ.percussion.harmonicThird ? "nord-option-on" : "nord-option-off"
                                        }
                                    >
                                        <small>Harmonic Third {organ.percussion.harmonicThird}</small>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Ns3Fx className="col-auto  d-flex" data={this.props.effects} source="Organ" />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
