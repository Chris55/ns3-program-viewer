import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns2.css";
import NordLabelAndValue from "./lib/nord-label-and-value";
import NordValueOnOff from "./lib/nord-value-on-off";

export default class Ns2SectionSynthArp extends Component {
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
                                        <NordValueOnOff label="On" data={arp} table={true} />
                                    </tr>
                                    <tr>
                                        <NordLabelAndValue label="Rate" data={arp.rate} table={true} />
                                    </tr>
                                    <tr>
                                        <NordValueOnOff label="Mst Clk" data={arp.masterClock} table={true} />
                                    </tr>

                                    <tr>
                                        <NordLabelAndValue label="Range" data={arp.range} table={true} />
                                    </tr>
                                    <tr>
                                        <NordLabelAndValue label="Pattern" data={arp.pattern} table={true} />
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
