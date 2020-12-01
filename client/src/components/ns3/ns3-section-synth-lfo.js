import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";
import NordValueOnOff from "./lib/nord-value-on-off";
import NordLabelAndValue from "./lib/nord-label-and-value";

export default class Ns3SectionSynthLfo extends Component {
    render() {
        const lfo = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="">
                        <div className="nord-option-title">LFO</div>

                        <table className="table-borderless">
                            <tbody>
                                <NordLabelAndValueWithMorph label="Rate" data={lfo.rate} upperCase={false} />

                                <tr>
                                    <NordLabelAndValue label="Wave" data={lfo.wave} table={true} />
                                </tr>
                                <tr>
                                    <NordValueOnOff label="Mst Clk" data={lfo.masterClock} table={true} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
