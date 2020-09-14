import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./lib/ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";
import Ns3SectionSynthAmpEnv from "./ns3-section-synth-amp-env";
import Ns3SectionSynthFilter from "./ns3-section-synth-filter";
import Ns3SectionSynthModEnv from "./ns3-section-synth-mod-env";
import Ns3SectionSynthLfo from "./ns3-section-synth-lfo";
import Ns3SectionSynthArp from "./ns3-section-synth-arp";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";

export default class Ns3SectionSynth extends Component {
    render() {
        const synth = this.props.data;
        const visible = synth.enabled;

        let lfoModEnvTitle = "LFO/Mod Amt";
        let lfoModEnvValue = "0.0";
        if (synth.oscillators.modulations.lfoAmount.midi < 64) {
            lfoModEnvTitle = "LFO Amt";
            lfoModEnvValue = synth.oscillators.modulations.lfoAmount.value;
        } else if (synth.oscillators.modulations.modEnvAmount.midi > 64) {
            lfoModEnvTitle = "Mod Env Amt";
            lfoModEnvValue = synth.oscillators.modulations.modEnvAmount.value;
        }

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "row nord-on" : "row nord-off"}>
                        <div className="col-auto text-center">
                            <Ns3VolumeAndMore name={"SYNTH"} data={synth} />
                        </div>

                        <div className="col-auto">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="col-auto">
                                            <table className="table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Ns3LabelAndValue label="Voice" data={synth.voice} />
                                                        </td>
                                                        <td>
                                                            <Ns3LabelAndValue
                                                                enabled={synth.voice.value !== "Poly"}
                                                                label="Glide Rate"
                                                                data={synth.glide}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Ns3LabelAndValue
                                                                enabled={synth.unison.value !== "Off"}
                                                                label="Unison"
                                                                data={synth.unison}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Ns3LabelAndValue
                                                                enabled={synth.vibrato.value !== "Off"}
                                                                label="Vibrato"
                                                                data={synth.vibrato}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Ns3ValueOnOff label="Kb Hold" data={synth.keyboardHold} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="nord-name">{synth.oscillators.waveForm1.value}</div>
                                        </div>
                                    </div>
                                </div>
                                <Ns3SectionSynthArp
                                    className="col-auto nord-synth-sub-feature"
                                    data={synth.arpeggiator}
                                />
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <Ns3LabelAndValue label="Type" data={synth.oscillators.type} />
                                </div>
                                <div className="col-auto">
                                    <Ns3LabelAndValue label="OSC Config" data={synth.oscillators.config} />
                                </div>
                                <div className="col-auto">
                                    <Ns3LabelAndValue label="OSC Control" data={synth.oscillators.control} />
                                </div>
                                <div className="col-auto">
                                    <Ns3LabelAndValue label="OSC 2 Pitch" data={synth.oscillators.pitch} />
                                </div>

                                <div className="col-auto">
                                    <Ns3ValueOnOff label="Fast Atk" data={synth.oscillators.fastAttack} />
                                </div>

                                <div className="col-auto">
                                    <Ns3LabelAndValue label={lfoModEnvTitle} data={{ value: lfoModEnvValue }} />
                                </div>

                            </div>

                            <div className="row">
                                <Ns3SectionSynthLfo
                                    className="col-auto nord-synth-sub-feature"
                                    data={synth.lfo}
                                />

                                <Ns3SectionSynthModEnv
                                    className="col-auto  nord-synth-sub-feature"
                                    data={synth.envelopes.modulation}
                                />

                                <Ns3SectionSynthFilter
                                    className="col-auto  nord-synth-sub-feature"
                                    data={synth.filter}
                                />

                                <Ns3SectionSynthAmpEnv
                                    className="col-auto  nord-synth-sub-feature"
                                    data={synth.envelopes.amplifier}
                                />
                            </div>
                        </div>

                        <Ns3Fx data={this.props.effects} source="Synth" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
