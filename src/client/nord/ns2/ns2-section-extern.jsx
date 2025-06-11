import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import Ns2VolumeAndMore from "./ns2-volume-and-more";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabel from "../lib/nord-label";

export default class Ns2SectionExtern extends Component {
    render() {
        const extern = this.props.data;
        const visible = extern.enabled;
        const dimmed = extern.dimmed === true;
        const channel = {
            value: `${extern.channel.type} ${extern.channel.value}`,
            isDefault: extern.channel.isDefault,
        };

        const cc = {
            value: `${extern.cc.value} ${extern.cc.text}`,
            isDefault: extern.cc.isDefault,
        };

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={dimmed ? "nord-dimmed" : "nord-on"}>
                        <div className="">
                            <div className="row no-gutters">
                                <div className="d-flex">
                                    <Ns2VolumeAndMore name="EXTERN" data={extern} />
                                </div>

                                <div className="row no-gutters d-flex flex-wrap">
                                    <div className="row no-gutters flex-column m-1">
                                        <table className="table-borderless">
                                            <tbody>
                                                {/*<tr>*/}
                                                {/*    <NordLabelAndValue*/}
                                                {/*        label="Control"*/}
                                                {/*        data={extern.control}*/}
                                                {/*        table={true}*/}
                                                {/*    />*/}
                                                {/*</tr>*/}

                                                <tr>
                                                    <NordLabelAndValue label="Channel" data={channel} table={true} />
                                                </tr>

                                                <tr>
                                                    <NordLabelAndValue
                                                        label="Velocity"
                                                        data={extern.velocity}
                                                        table={true}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="row no-gutters flex-column ml-5 mt-1">
                                        <table className="table-borderless">
                                            <tbody>
                                                <NordLabelAndValueWithMorph
                                                    enabled={extern.volume.enabled}
                                                    label="Volume"
                                                    data={extern.volume}
                                                />
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="row no-gutters flex-column ml-5 mt-1">
                                        <table className="table-borderless">
                                            <tbody>
                                                <tr className={extern.program.enabled ? "" : "nord-off"}>
                                                    <NordLabelAndValue
                                                        label="Program Change (1-128)"
                                                        data={extern.program}
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr>
                                                    <NordLabel
                                                        enabled={extern.cc00.enabled || extern.cc32.enabled}
                                                        label="Bank Select (0-127)"
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr className={extern.cc00.enabled ? "" : "nord-off"}>
                                                    <NordLabelAndValue
                                                        label="MSB (CC 0)"
                                                        data={extern.cc00}
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr className={extern.cc32.enabled ? "" : "nord-off"}>
                                                    <NordLabelAndValue
                                                        label="LSB (CC 32)"
                                                        data={extern.cc32}
                                                        table={true}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="row no-gutters flex-column ml-5 mt-1">
                                        <table className="table-borderless">
                                            <tbody>
                                                <tr>
                                                    <NordLabelAndValue
                                                        enabled={extern.midiCc.enabled}
                                                        label="Midi CC"
                                                        data={cc}
                                                        table={true}
                                                    />
                                                </tr>

                                                <NordLabelAndValueWithMorph
                                                    enabled={extern.midiCc.enabled}
                                                    label="Value"
                                                    data={extern.midiCc}
                                                />
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="row no-gutters flex-column ml-5 mt-1">
                                        <table className="table-borderless">
                                            <tbody>
                                                <tr>
                                                    <NordValueOnOff
                                                        label="A.Touch"
                                                        data={extern.afterTouch}
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr>
                                                    <NordValueOnOff
                                                        label="Wheel (CC 1)"
                                                        data={extern.wheel}
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr>
                                                    <NordValueOnOff
                                                        label="CtrlPed (CC 11)"
                                                        data={extern.controlPedal}
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr>
                                                    <NordValueOnOff
                                                        label="Swell (CC 4)"
                                                        data={extern.swell}
                                                        table={true}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
