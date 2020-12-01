import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "./lib/nord-label-and-value";
import NordValueOnOff from "./lib/nord-value-on-off";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";

export default class Ns3FxReverb extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled;
        const align = this.props.other === true ? "align-self-start" : "align-self-center";

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on " + align : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">REVERB</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <NordLabelAndValue label="Type" data={fx.type} table={true} />
                                    </tr>
                                    <NordLabelAndValueWithMorph label="Amount" data={fx.amount} />
                                    <tr>
                                        <NordValueOnOff label="Bright" data={fx.bright} table={true} />
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
