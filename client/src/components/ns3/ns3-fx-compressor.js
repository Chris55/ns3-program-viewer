import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3FxCompressor extends Component {
    render() {
        const fx = this.props.data;
        const visible = true;

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on" : "d-flex nord-off"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">COMPRESSOR</div>

                            <table className="table-borderless">
                                <tbody>
                                    <Ns3LabelAndValueWithMorph label="Amt" data={fx.amount} />
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Fast" data={fx.masterClock} />
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
