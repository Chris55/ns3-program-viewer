import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValue from "../lib/nord-label-and-value";

export default class Ns2SectionSynthOscillators extends Component {
    render() {
        const osc = this.props.data;

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

                                    <NordLabelAndValueWithMorph label="Shape Ctrl" data={osc.shapeCtrl} />

                                    <tr>
                                        <NordLabelAndValue label={osc.shapeMod.label} data={osc.shapeMod} table={true} />
                                    </tr>

                                    <tr>
                                        <NordValueOnOff label="Skip Samp Atk" data={osc.skipSampleAttack} table={true} />
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
