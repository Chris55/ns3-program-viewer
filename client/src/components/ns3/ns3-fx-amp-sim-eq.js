import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import NordLabelAndValue from "./lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";

export default class Ns3FxAmpSimEq extends Component {
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
                                    <NordLabelAndValueWithMorph label="Drive" data={fx.overdrive} />
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
                                            label={fx.ampType.redOptions === true ? "Flt Res" : "Middle"}
                                            data={fx.midRes}
                                            upperCase={false}
                                            table={true}
                                        />
                                    </tr>

                                    <NordLabelAndValueWithMorph
                                        label={fx.ampType.redOptions === true ? "Flt Freq" : "Mid Freq"}
                                        data={fx.midFilterFreq}
                                        upperCase={false}
                                    />

                                    <tr>
                                        <NordLabelAndValue
                                            label={fx.ampType.redOptions === true ? "Dry/Wet" : "Bass"}
                                            data={fx.bassDryWet}
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
