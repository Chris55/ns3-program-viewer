import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3SectionSynthFilter extends Component {
    render() {
        const filter = this.props.data;

        let velModTitle = "Vel/Mod Amt";
        let velModValue = "0.0";
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
                    <div className="justify-content-center">
                        <div>
                            <strong>FILTER</strong>
                        </div>

                        <table className="table-borderless nord-option-on-no-uppercase">
                            <tbody>
                                <tr>
                                    <Ns3LabelAndValue label="Type" data={filter.type}  table={true}/>
                                    <td>
                                        <div className="m-1"/>
                                    </td>
                                    <Ns3LabelAndValue
                                        enabled={filter.kbTrack.value !== "Off"}
                                        label="Kb Trk" data={filter.kbTrack}  table={true}/>
                                </tr>
                                <tr>
                                    <td/>
                                    <td/>
                                    <td/>
                                    <td/>
                                    <Ns3LabelAndValue
                                        enabled={filter.drive.value !== "Off"}
                                        label="Drive" data={filter.drive}  table={true}/>
                                </tr>

                                <tr>
                                    <Ns3LabelAndValueWithMorph label="LFO Amt" data={filter.modulations.lfoAmount} />
                                    <td/>
                                    <Ns3LabelAndValue label={velModTitle} data={velModValue} />
                                </tr>

                                <tr>
                                    <Ns3LabelAndValueWithMorph label="Freq" data={filter.cutoffFrequency} />
                                    <td/>
                                    <Ns3LabelAndValueWithMorph label={resFreqHpTitle} data={resFreqHpValue} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
