import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import NordLabelAndValue from "./lib/nord-label-and-value";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";

export default class Ns3SectionSynthFilter extends Component {
    render() {
        const filter = this.props.data;

        let velModTitle = "Vel/Mod Amt";
        let velModValue = filter.modulations.velAmount;
        if (filter.modulations.velAmount.midi < 64) {
            velModTitle = "Vel Amt";
            velModValue = filter.modulations.velAmount;
        } else if (filter.modulations.modEnvAmount.midi > 64) {
            velModTitle = "Mod Env Amt";
            velModValue = filter.modulations.modEnvAmount;
        }

        let resFreqHpTitle, resFreqHpValue;

        if (filter.type.value === "LP+HP") {
            resFreqHpTitle = "Freq HP";
            resFreqHpValue = filter.highPassCutoffFrequency;
        } else {
            resFreqHpTitle = "Resonance";
            resFreqHpValue = filter.resonance;
        }

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
                                                    label="LFO Amt"
                                                    data={filter.modulations.lfoAmount}
                                                />

                                                <NordLabelAndValueWithMorph
                                                    label="Freq"
                                                    data={filter.cutoffFrequency}
                                                    upperCase={false}
                                                />
                                            </tbody>
                                        </table>
                                    </td>
                                    <td />
                                    <td />
                                    <td className="align-text-top">
                                        <table className="table-borderless">
                                            <tbody>
                                                <tr>
                                                    <NordLabelAndValue
                                                        enabled={filter.kbTrack.value !== "Off"}
                                                        label="Kb Trk"
                                                        data={filter.kbTrack}
                                                        table={true}
                                                    />
                                                </tr>
                                                <tr>
                                                    <NordLabelAndValue
                                                        enabled={filter.drive.value !== "Off"}
                                                        label="Drive"
                                                        data={filter.drive}
                                                        table={true}
                                                    />
                                                </tr>

                                                <tr>
                                                    <NordLabelAndValue
                                                        label={velModTitle}
                                                        data={velModValue}
                                                        table={true}
                                                    />
                                                </tr>

                                                <NordLabelAndValueWithMorph
                                                    label={resFreqHpTitle}
                                                    data={resFreqHpValue}
                                                    upperCase={false}
                                                />
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
