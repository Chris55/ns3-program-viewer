import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3SectionSynthArp extends Component {
    render() {
        const arp = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="text-left">
                        <div className={arp.enabled ? "nord-on" : "nord-off"}>
                            <div className="nord-option-title">ARP</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <Ns3ValueOnOff label="Run" data={arp} table={true} />
                                    </tr>
                                    <tr>
                                        <Ns3ValueOnOff label="Kb Sync" data={arp.kbSync} table={true} />
                                    </tr>
                                    <tr>
                                        <Ns3ValueOnOff label="Mst Clk" data={arp.masterClock} table={true} />
                                    </tr>

                                    <Ns3LabelAndValueWithMorph label="Rate" data={arp.rate} />

                                    <tr>
                                        <Ns3LabelAndValue label="Range" data={arp.range} table={true} />
                                    </tr>
                                    <tr>
                                        <Ns3LabelAndValue label="Pattern" data={arp.pattern} table={true} />
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
