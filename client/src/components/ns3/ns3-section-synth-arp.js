import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3Label from "./lib/ns3-label";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3SectionSynthArp extends Component {
    render() {
        const arp = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="justify-content-center">
                        <div
                            className={
                                arp.enabled
                                    ? "nord-synth-sub-feature nord-on"
                                    : "nord-synth-sub-feature nord-off"
                            }
                        >
                            <div className="nord-option-title">ARP</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Run" data={arp.enabled} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Kb Sync" data={arp.kbSync} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Mst Clk" data={arp.masterClock} />
                                        </td>
                                    </tr>

                                        <Ns3LabelAndValueWithMorph label="Rate" data={arp.rate} />

                                    <tr>
                                        <td>
                                            <Ns3Label label="Range" />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={arp.range} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Ns3Label label="Pattern" />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={arp.pattern} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
