import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import Ns3VolumeAndMore from "./lib/ns3-volume-and-more";
import NordLabelAndValue from "./lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";

export default class Ns3SectionExtern extends Component {
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
                                    <Ns3VolumeAndMore name={"EXTERN"} data={extern} />
                                </div>

                                <div className="row no-gutters d-flex flex-wrap">
                                    <div className="row no-gutters flex-column m-1">
                                        <table className="table-borderless">
                                            <tbody>
                                                <NordLabelAndValue label="Control" data={extern.control} table={true} />
                                                <NordLabelAndValueWithMorph label="Volume" data={extern.volume} />
                                                <NordLabelAndValueWithMorph label="Program" data={extern.program} />
                                                <NordLabelAndValueWithMorph label="Midi CC" data={extern.midiCc} />
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
