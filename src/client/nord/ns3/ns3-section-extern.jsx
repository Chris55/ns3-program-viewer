import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabel from "../lib/nord-label";

export default class Ns3SectionExtern extends Component {
    render() {
        const extern = this.props.data;
        const visible = extern.enabled;
        const dimmed = extern.dimmed === true;

        const cc = {
            value: `${extern.cc.value} ${extern.cc.text}`,
            isDefault: extern.cc.isDefault,
        };

        return (
            <div className={visible ? this.props.className : "d-none"}>
                <div className={dimmed ? "nord-dimmed" : "nord-on"}>
                    <div className="">
                        <div className="row no-gutters">
                            <div className="d-flex">
                                <Ns3VolumeAndMore name="EXTERN" data={extern} />
                            </div>

                            <div className="row no-gutters d-flex flex-wrap">
                                <div className="row no-gutters flex-column m-1">
                                    <table className="table-borderless">
                                        <tbody>
                                            <tr>
                                                <NordLabelAndValue
                                                    enabled={extern.channel.enabled}
                                                    label="Channel"
                                                    data={extern.channel}
                                                    table={true}
                                                />
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
                                            {/*<tr>*/}
                                            {/*    <NordValueOnOff*/}
                                            {/*        label="On Load"*/}
                                            {/*        data={{ enabled: extern.volume.enabledOnLoad}}*/}
                                            {/*        table={true}*/}
                                            {/*    />*/}
                                            {/*</tr>*/}
                                            <NordLabelAndValueWithMorph
                                                enabled={extern.volume.enabledOnLoad}
                                                label="Volume"
                                                data={extern.volume}
                                            />
                                        </tbody>
                                    </table>
                                </div>

                                <div className="row no-gutters flex-column ml-5 mt-1">
                                    <table className="table-borderless">
                                        <tbody>
                                            <NordLabelAndValueWithMorph
                                                enabled={extern.program.enabledOnLoad}
                                                label="Program Change"
                                                data={extern.program}
                                            />

                                            <tr>
                                                <NordLabel
                                                    enabled={extern.cc00.enabled || extern.cc32.enabled}
                                                    label="Bank Select"
                                                    table={true}
                                                />
                                            </tr>

                                            <tr className={extern.cc00.enabled ? "" : "nord-off"}>
                                                <NordLabelAndValue label="MSB (CC 0)" data={extern.cc00} table={true} />
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
                                                    enabled={extern.midiCc.enabledOnLoad}
                                                    label="Midi CC"
                                                    data={cc}
                                                    table={true}
                                                />
                                            </tr>

                                            <NordLabelAndValueWithMorph
                                                enabled={extern.midiCc.enabledOnLoad}
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
                                                <NordValueOnOff label="A.Touch" data={extern.afterTouch} table={true} />
                                            </tr>

                                            <tr>
                                                <NordValueOnOff label="Wheel (CC 1)" data={extern.wheel} table={true} />
                                            </tr>

                                            <tr>
                                                <NordValueOnOff
                                                    label="CtrlPed (CC 11)"
                                                    data={extern.controlPedal}
                                                    table={true}
                                                />
                                            </tr>

                                            <tr>
                                                <NordValueOnOff label="Swell (CC 4)" data={extern.swell} table={true} />
                                            </tr>

                                            <tr>
                                                <NordValueOnOff label="Vol (CC 7)" data={extern.volume} table={true} />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
