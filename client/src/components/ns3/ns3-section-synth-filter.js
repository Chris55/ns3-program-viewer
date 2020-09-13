import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3TableValue from "./lib/ns3-label-and-value-with-morph";

export default class Ns3SectionSynthFilter extends Component {
    render() {
        const filter = this.props.data;

        let velModTitle = "VEL/MOD AMT";
        let velModValue = "0.0";
        if (filter.modulations.velAmount.midi < 64) {
            velModTitle = "VEL AMT";
            velModValue = filter.modulations.velAmount.label;
        } else if (filter.modulations.modEnvAmount.midi > 64) {
            velModTitle = "MOD ENV AMT";
            velModValue = filter.modulations.modEnvAmount.label;
        }

        let resFreqHpTitle, resFreqHpValue;

        if (filter.type === "LP+HP") {
            resFreqHpTitle = "FREQ HP";
            resFreqHpValue = filter.highPassCutoffFrequency.label;
        } else {
            resFreqHpTitle = "RESONANCE";
            resFreqHpValue = filter.resonance.label;
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
                                    {/*colspan="2"*/}
                                    <td>
                                        <small>TYPE </small>
                                    </td>
                                    <td />
                                    <td>
                                        <strong>{filter.type}</strong>
                                    </td>
                                    <td>
                                        <div className="nord-empty-5"></div>
                                    </td>
                                    <td>
                                        <small>KB TRK</small>
                                    </td>
                                    <td />
                                    <td>
                                        <strong>{filter.kbTrack}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="nord-empty-5"></div>
                                    </td>
                                    <td />
                                    <td>
                                        <small>DRIVE</small>
                                    </td>
                                    <td />
                                    <td>
                                        <strong>{filter.drive}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <Ns3TableValue label="LFO AMT" data={filter.modulations.lfoAmount} />

                                    <td>
                                        <div className="nord-empty-5"></div>
                                    </td>
                                    <td>
                                        <small>{velModTitle}</small>
                                    </td>
                                    <td />
                                    <td>
                                        <strong>{velModValue}</strong>
                                    </td>
                                </tr>

                                <tr>
                                    <Ns3TableValue label="FREQ" data={filter.cutoffFrequency} />

                                    <td>
                                        <div className="nord-empty-5"></div>
                                    </td>
                                    <td>
                                        <small>{resFreqHpTitle}</small>
                                    </td>
                                    <td>
                                        <strong>{resFreqHpValue}</strong>
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
