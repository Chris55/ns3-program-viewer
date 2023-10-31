import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value.js";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph.js";
import NordValueOnOff from "../lib/nord-value-on-off.js";

export default class Ns2FxMulti2 extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source.value === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">EFFECT 2</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <NordLabelAndValue label="Type" data={fx.type} table={true} />
                                    </tr>
                                    <tr>
                                        <NordValueOnOff label="Mst Clk" data={fx.masterClock} table={true} />
                                    </tr>

                                    <NordLabelAndValueWithMorph label="Rate" data={fx.rate} />

                                    <NordLabelAndValueWithMorph label="Amount" data={fx.amount} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
