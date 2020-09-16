import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3Label from "./lib/ns3-label";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3FxMulti1 extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source.value === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">EFFECT 1</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <td>
                                            <Ns3Label label="Type" />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={fx.type} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Mst Clk" data={fx.masterClock} />
                                        </td>
                                    </tr>

                                        <Ns3LabelAndValueWithMorph label="Rate" data={fx.rate} />

                                        <Ns3LabelAndValueWithMorph label="Amount" data={fx.amount} />

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
