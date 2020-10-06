import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3Label from "./lib/ns3-label";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

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
                                        <Ns3LabelAndValue label="Amp Type" data={fx.ampType} table={true} />
                                    </tr>
                                    <Ns3LabelAndValueWithMorph label="Drive" data={fx.overdrive} />
                                    <tr>
                                        <Ns3LabelAndValue
                                            label="Treble"
                                            data={fx.treble}
                                            upperCase={false}
                                            table={true}
                                        />
                                    </tr>
                                    <tr>
                                        <Ns3LabelAndValue
                                            label={fx.ampType.redOptions === true ? "Flt Res" : "Middle"}
                                            data={fx.midRes}
                                            upperCase={false}
                                            table={true}
                                        />
                                    </tr>

                                    <Ns3LabelAndValueWithMorph
                                        label={fx.ampType.redOptions === true ? "Flt Freq" : "Mid Freq"}
                                        data={fx.midFilterFreq}
                                        upperCase={false}
                                    />

                                    <tr>
                                        <Ns3LabelAndValue
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
