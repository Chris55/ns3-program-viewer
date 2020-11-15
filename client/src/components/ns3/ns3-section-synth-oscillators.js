import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import NordLabelAndValueWithMorph from "./lib/nord-label-and-value-with-morph";
import NordValueOnOff from "./lib/nord-value-on-off";
import NordLabelAndValue from "./lib/nord-label-and-value";

export default class Ns3SectionSynthOscillators extends Component {
    render() {
        const osc = this.props.data;

        let lfoModEnvValue =
            osc.modulations.isLfo  ? osc.modulations.lfoAmount : osc.modulations.modEnvAmount;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="">
                        <div className="nord-option-title">OSC</div>

                        <div>
                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <NordLabelAndValue label="Type" data={osc.type} table={true} />
                                    </tr>
                                    <tr>
                                        <NordValueOnOff label="Fast Atk" data={osc.fastAttack} table={true} />
                                    </tr>
                                    <tr>
                                        <NordLabelAndValue label="Config" data={osc.config} table={true} />
                                    </tr>

                                    <NordLabelAndValueWithMorph label="Ctrl" data={osc.control} />
                                    <tr>
                                        <NordLabelAndValue label="OSC 2 Pitch" data={osc.pitch} table={true} />
                                    </tr>
                                    <NordLabelAndValueWithMorph label={osc.modulations.label} data={lfoModEnvValue} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
