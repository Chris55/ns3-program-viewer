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
                                        <td>
                                            <Ns3Label label="Amp Type" />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={fx.ampType} />
                                        </td>
                                    </tr>
                                    <Ns3LabelAndValueWithMorph label="Drive" data={fx.overdrive} />
                                    <tr>
                                        <td>
                                            <Ns3Label label="Treble" />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={fx.treble} upperCase={false} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Ns3Label label={fx.ampType.redOptions === true ? "Flt Res" : "Middle"} />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={fx.midRes} upperCase={false} />
                                        </td>
                                    </tr>

                                    <Ns3LabelAndValueWithMorph
                                        label={fx.ampType.redOptions === true ? "Flt Freq" : "Mid Freq"}
                                        data={fx.midFilterFreq}
                                        upperCase={false}
                                    />

                                    <tr>
                                        <td>
                                            <Ns3Label label={fx.ampType.redOptions === true ? "Dry/Wet" : "Bass"} />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={fx.bassDryWet} upperCase={false} />
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
