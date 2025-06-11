import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import NordLabelAndValue from "../lib/nord-label-and-value";

export default class Ns2SectionSynthOscillators extends Component {
    render() {
        const osc = this.props.data;

        const ctrl = osc.waveForm1.useShapeKnob ? (
            <NordLabelAndValueWithMorph label="Shape Ctrl" data={osc.shapeCtrl} />
        ) : (
            <tr>
                <NordLabelAndValue enabled={false} label="Shape Ctrl" data={{ value: "" }} table={true} />
            </tr>
        );

        const shapeModLabel = osc.shapeMod.label.startsWith("Mod")
            ? "Shape " + osc.shapeMod.label
            : "Shape Mod " + osc.shapeMod.label;

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

                                    {osc.waveForm1.useShapeKnob && ctrl}

                                    {!osc.waveForm1.useShapeKnob && (
                                        <NordLabelAndValueWithMorph
                                            label="Skip Samp Atk"
                                            enabled={!osc.waveForm1.useShapeKnob}
                                            data={osc.skipSampleAttack}
                                        />
                                    )}

                                    <tr>
                                        <NordLabelAndValue label={shapeModLabel} data={osc.shapeMod} table={true} />
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
