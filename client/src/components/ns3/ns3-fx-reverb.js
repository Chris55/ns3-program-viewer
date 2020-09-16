import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3Label from "./lib/ns3-label";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3FxReverb extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled;
        const align = this.props.other === true ? "align-self-start": "align-self-center";

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on " + align : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">REVERB</div>

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
                                    <Ns3LabelAndValueWithMorph label="Amount" data={fx.amount} />
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Bright" data={fx.bright} />
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
