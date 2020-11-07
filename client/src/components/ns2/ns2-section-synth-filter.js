import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns2.css";
import NordLabelAndValue from "./lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";
import NordValueOnOff from "./lib/nord-value-on-off";

export default class Ns2SectionSynthFilter extends Component {
    render() {
        const filter = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="">
                        <div className="nord-option-title">FILTER</div>

                        <table className="table-borderless">
                            <tbody>
                                <tr>
                                    <td className="align-text-top">
                                        <table className="table-borderless">
                                            <tbody>
                                                <tr>
                                                    <NordLabelAndValue label="Type" data={filter.type} table={true} />
                                                </tr>

                                                <NordLabelAndValueWithMorph
                                                    label="Freq"
                                                    data={filter.frequency}
                                                    upperCase={false}
                                                />

                                                <tr>
                                                    <NordLabelAndValue label="Res" data={filter.resonance} table={true} />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td />
                                    <td />
                                    <td className="align-text-top">
                                        <table className="table-borderless">
                                            <tbody>
                                                <tr>
                                                    <NordValueOnOff label="Kb Trk" data={filter.kbTrack} table={true} />
                                                </tr>


                                                <tr>
                                                    <NordLabelAndValue
                                                        label="LFO AMT"
                                                        data={filter.modulation1}
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr>
                                                    <NordLabelAndValue
                                                        label={filter.modulation2.label}
                                                        data={filter.modulation2}
                                                        table={true}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
