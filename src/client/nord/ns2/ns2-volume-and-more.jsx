import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import NordLabel from "../lib/nord-label";

export default class Ns2VolumeAndMore extends Component {
    render() {
        const section = this.props.data;

        const options =
            this.props.name === "EXTERN" ? (
                <div>
                    <NordValueOnOff label="Pstick" data={section.pitchStick} />
                    <span className="m-1" />
                    <NordValueOnOff label="SustPed" data={section.sustainPedal} />
                </div>
            ) : (
                <>
                    <div>
                        <NordValueOnOff label="Pstick" data={section.pitchStick} />
                        <span className="m-1" />
                        <NordValueOnOff label="LatchPed" data={section.latchPedal} />
                    </div>

                    <div>
                        <NordValueOnOff label="SustPed" data={section.sustainPedal} />
                        <span className="m-1" />
                        <NordValueOnOff label="KbGate" data={section.kbGate} />
                    </div>
                </>
            );

        return (
            <React.Fragment>
                <div className="m-1 text-center">
                    <div>
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
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <NordLabelAndValue enabled={section.octaveShift.value !== 0} data={section.octaveShift} />
                    </div>

                    {options}
                </div>
            </React.Fragment>
        );
    }
}
