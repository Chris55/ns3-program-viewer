import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "./lib/nord-label-and-value";

export default class Ns2FxAmpSimEq extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source.value === this.props.source;
        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">AMP SIM / EQ</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <NordLabelAndValue label="Amp Type" data={fx.ampType} table={true} />
                                    </tr>
                                    <tr>
                                        <NordLabelAndValue label="Drive" data={fx.overdrive} table={true}/>
                                    </tr>
                                    <tr>
                                        <NordLabelAndValue
                                            label="Treble"
                                            data={fx.treble}
                                            upperCase={false}
                                            table={true}
                                        />
                                    </tr>
                                    <tr>
                                        <NordLabelAndValue
                                            label="Middle"
                                            data={fx.mid}
                                            upperCase={false}
                                            table={true}
                                        />
                                    </tr>

                                    <tr>
                                        <NordLabelAndValue
                                            label="Mid Freq"
                                            data={fx.midFilterFreq}
                                            upperCase={false}
                                            table={true}
                                        />
                                    </tr>

                                    <tr>
                                        <NordLabelAndValue
                                            label="Bass"
                                            data={fx.bass}
                                            upperCase={false}
                                            table={true}
                                        />
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
