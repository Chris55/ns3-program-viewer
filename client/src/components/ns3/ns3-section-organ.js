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

        const optionsEqual = organ.preset1.vibrato.enabled === organ.preset2.vibrato.enabled &&
            organ.preset1.percussion.enabled === organ.preset2.percussion.enabled &&
            organ.preset1.percussion.volumeSoft.enabled === organ.preset2.percussion.volumeSoft.enabled &&
            organ.preset1.percussion.decayFast.enabled === organ.preset2.percussion.decayFast.enabled &&
            organ.preset1.percussion.harmonicThird.enabled === organ.preset2.percussion.harmonicThird.enabled;

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
                                            <div className="nord-name">
                                                <table>
                                                    <tbody>
                                                        <NordLabelAndValueWithMorph
                                                            label="Preset I"
                                                            data={organ.preset1.drawbars}
                                                            valueClass={organ.preset1.enabled ? "nord-font-monospace": "nord-font-monospace nord-off"}
                                                        />
                                                        <NordLabelAndValueWithMorph
                                                            label="Preset II"
                                                            data={organ.preset2.drawbars}
                                                            valueClass={organ.preset2.enabled ? "nord-font-monospace": "nord-font-monospace nord-off"}
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

                                        <div className={optionsEqual? "d-none": ""}>
                                            <span className="m-1" />
                                            <div className="nord-label">Preset I</div>
                                        </div>


                                        <div>
                                            <NordLabel enabled={organ.preset1.vibrato.enabled} label={organ.preset1.vibrato.mode.label} />
                                            <span className="m-1" />
                                            <NordLabelAndValue
                                                label="Type"
                                                enabled={organ.preset1.vibrato.enabled}
                                                data={organ.preset1.vibrato.mode}
                                            />
                                        </div>

                                        <div>
                                            <NordValueOnOff label="Percussion" data={organ.preset1.percussion} />
                                        </div>
                                        <div>
                                            <NordValueOnOff label="Volume Soft" data={organ.preset1.percussion.volumeSoft} />
                                            <span className="m-1" />

                                            <NordValueOnOff label="Decay Fast" data={organ.preset1.percussion.decayFast} />
                                            <span className="m-1" />

                                            <NordValueOnOff
                                                label="Harmonic Third"
                                                data={organ.preset1.percussion.harmonicThird}
                                            />
                                        </div>

                                        <div className={optionsEqual? "d-none": ""} >
                                            <span className="m-1" />
                                            <div className="nord-label">Preset II</div>

                                            <div>
                                                <NordLabel enabled={organ.preset2.vibrato.enabled} label={organ.preset1.vibrato.mode.label} />
                                                <span className="m-1" />
                                                <NordLabelAndValue
                                                    label="Type"
                                                    enabled={organ.preset2.vibrato.enabled}
                                                    data={organ.preset1.vibrato.mode}
                                                />
                                            </div>

                                            <div>
                                                <NordValueOnOff label="Percussion" data={organ.preset2.percussion} />
                                            </div>
                                            <div>
                                                <NordValueOnOff label="Volume Soft" data={organ.preset2.percussion.volumeSoft} />
                                                <span className="m-1" />

                                                <NordValueOnOff label="Decay Fast" data={organ.preset2.percussion.decayFast} />
                                                <span className="m-1" />

                                                <NordValueOnOff
                                                    label="Harmonic Third"
                                                    data={organ.preset2.percussion.harmonicThird}
                                                />
                                            </div>
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
