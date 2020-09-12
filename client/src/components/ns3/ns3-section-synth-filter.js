import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3SectionSynthFilter extends Component {
    render() {
        const filter = this.props.data;

        let velModTitle = "Vel/Mod Amt";
        let velModValue = "0.0";
        if (filter.modulations.velAmount.midi < 64) {
            velModTitle = "Vel Amt";
            velModValue = filter.modulations.velAmount.label;
        } else if (filter.modulations.modEnvAmount.midi > 64) {
            velModTitle = "Mod Env Amt";
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

                        <table className="table-borderless nord-option-on">
                            <tbody>
                                <tr>
                                    <td colspan="2">
                                        <small>TYPE </small>
                                        <strong>{filter.type}</strong>
                                    </td>
                                    <td >
                                        <div className="nord-empty-5"></div>
                                    </td>
                                    <td>
                                        <small>Kdb Trk</small>
                                    </td>
                                    <td>
                                        <strong>{filter.kbTrack}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td >
                                        <div className="nord-empty-5"></div>
                                    </td>
                                    <td>
                                        <small>Drive</small>
                                    </td>
                                    <td>
                                        <strong>{filter.drive}</strong>
                                    </td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td>*/}
                                {/*        <small>Modulation</small>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <td>
                                        <small>LFO Amt</small>
                                    </td>
                                    <td>
                                        <strong>{filter.modulations.lfoAmount.label}</strong>
                                    </td>
                                    <td >
                                        <div className="nord-empty-5"></div>
                                    </td>
                                    <td>
                                        <small>{velModTitle}</small>
                                    </td>
                                    <td>
                                        <strong>{velModValue}</strong>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="2">
                                        <small>FREQ </small>
                                        <strong>{filter.cutoffFrequency.label}</strong>
                                    </td>
                                    <td >
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
