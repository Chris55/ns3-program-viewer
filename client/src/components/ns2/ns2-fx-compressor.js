import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value";

export default class Ns2FxCompressor extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled;
        const align = this.props.other === true ? "align-self-end" : "align-self-center";
        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on " + align : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">COMPRESSOR</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <NordLabelAndValue label="Amount" data={fx.amount} table={true} />
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
