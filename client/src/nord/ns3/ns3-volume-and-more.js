import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import NordLabel from "../lib/nord-label";

export default class Ns3VolumeAndMore extends Component {
    render() {
        const section = this.props.data;

        const pitchStickRangeAvailable = this.props.name === "SYNTH";
        const pitchStickRangeVisible = pitchStickRangeAvailable && section.pitchStickRange?.visible;

        return (
            <React.Fragment>
                <div className="m-1 text-center">
                    <h6 className="mt-1 font-weight-bold">{this.props.name}</h6>

                    <div className={this.props.name !== "EXTERN" ? "my-2" : "d-none"}>
                        <NordLabel label="Level" />
                        <table className="text-left" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <tbody>
                                <NordLabelAndValueWithMorph data={section.volume} upperCase={false} />
                            </tbody>
                        </table>
                    </div>

                    <div className="">
                        <NordLabel label="Kb Zone" />
                        <div className="">
                            <span className={section.kbZone.array[0] ? "dot dot-kb-zone " : "dot"} />
                            <span className={section.kbZone.array[1] ? "dot dot-kb-zone " : "dot"} />
                            <span className={section.kbZone.array[2] ? "dot dot-kb-zone " : "dot"} />
                            <span className={section.kbZone.array[3] ? "dot dot-kb-zone " : "dot"} />
                        </div>
                    </div>

                    <div className="">
                        <NordLabelAndValue enabled={section.octaveShift.value !== 0} data={section.octaveShift} />
                        {section.octaveShift.comment && (
                            <span className="nord-comment" title={section.octaveShift.comment}>
                                ?
                            </span>
                        )}
                    </div>

                    <div>
                        <NordValueOnOff label="Pstick" data={section.pitchStick} />

                        <span className="m-1" />

                        <NordValueOnOff label="SustPed" data={section.sustainPedal} />
                    </div>
                    <div className={pitchStickRangeVisible ? "text-left" : "d-none"}>
                        <NordLabel label={section.pitchStickRange?.value} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
