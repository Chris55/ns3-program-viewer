import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3FxMulti2 extends Component {
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
                                        <Ns3LabelAndValue label="Type" data={fx.type} table={true} />
                                    </tr>
                                    <tr>
                                        <Ns3LabelAndValue label="Rate" data={fx.rate} table={true} />
                                    </tr>

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
