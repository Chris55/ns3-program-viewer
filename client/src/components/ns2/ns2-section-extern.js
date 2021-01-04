import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import Ns2VolumeAndMore from "./ns2-volume-and-more";

export default class Ns2SectionExtern extends Component {
    render() {
        const extern = this.props.data;
        const visible = extern.enabled;
        const dimmed = extern.dimmed === true;

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
                                                <tr>
                                                    <NordLabelAndValue
                                                        label="Control"
                                                        data={extern.control}
                                                        table={true}
                                                    />
                                                </tr>

                                                <NordLabelAndValueWithMorph
                                                    enabled={extern.volume.enabled}
                                                    label="Volume"
                                                    data={extern.volume}
                                                />

                                                <tr className={extern.program.enabled ? "": "nord-off"}>
                                                    <NordLabelAndValue
                                                        label="Program"
                                                        data={extern.program}
                                                        table={true}
                                                    />
                                                </tr>
                                                <NordLabelAndValueWithMorph
                                                    enabled={extern.midiCc.enabled}
                                                    label="Midi CC"
                                                    data={extern.midiCc}
                                                />
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
