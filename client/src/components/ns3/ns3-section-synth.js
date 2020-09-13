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
            lfoModEnvValue = synth.oscillators.modulations.lfoAmount.label;
        } else if (synth.oscillators.modulations.modEnvAmount.midi > 64) {
            lfoModEnvTitle = "Mod Env Amt";
            lfoModEnvValue = synth.oscillators.modulations.modEnvAmount.label;
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
                                                            <Ns3LabelAndValue
                                                                label="Voice" data={synth.voice}/>
                                                        </td>
                                                        <td>
                                                            <Ns3LabelAndValue
                                                                enabled={synth.voice.value !== "Poly"}
                                                                label="Glide Rate" data={synth.glide}/>
                                                        </td>
                                                        <td>
                                                            <Ns3LabelAndValue
                                                                enabled={synth.unison.value !== "Off"}
                                                                label="Unison" data={synth.unison}/>
                                                        </td>
                                                        <td>
                                                            <Ns3LabelAndValue
                                                                enabled={synth.vibrato.value !== "Off"}
                                                                label="Vibrato" data={synth.vibrato}/>
                                                        </td>
                                                        <td>
                                                            <Ns3ValueOnOff
                                                                label="Kb Hold" data={synth.keyboardHold}/>
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
                                {/*<div className="col-auto">*/}
                                {/*    <div>*/}
                                {/*        <span className="nord-option-on">*/}
                                {/*            <small>Type</small>*/}
                                {/*            <strong> {synth.oscillators.type} </strong>*/}
                                {/*        </span>*/}

                                {/*        <span> </span>*/}

                                {/*        <span className="nord-option-on">*/}
                                {/*            <small>OSC CONFIG</small>*/}
                                {/*            <strong> {synth.oscillators.config} </strong>*/}
                                {/*        </span>*/}
                                {/*    </div>*/}

                                {/*    <div>*/}

                                {/*        <span className="nord-option-on">*/}
                                {/*            <small>OSC CTRL</small>*/}
                                {/*            <strong>{synth.oscillators.control.label}</strong>*/}
                                {/*            <span> </span>*/}
                                {/*            <small> OSC 2 PITCH </small>*/}
                                {/*            <strong>{synth.oscillators.pitch.label}</strong>*/}
                                {/*        </span>*/}
                                {/*    </div>*/}

                                {/*    <div>*/}
                                {/*        <span*/}
                                {/*            className={*/}
                                {/*                synth.oscillators.fastAttack ? "nord-option-on" : "nord-option-off"*/}
                                {/*            }*/}
                                {/*        >*/}
                                {/*            <small>FAST ATK</small>*/}
                                {/*        </span>*/}

                                {/*        <span> </span>*/}

                                {/*        <span className="nord-option-on">*/}
                                {/*            <small>{lfoModEnvTitle} </small>*/}
                                {/*            <strong>{lfoModEnvValue}</strong>*/}
                                {/*        </span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                            <div className="row">
                                {/*<Ns3SectionSynthLfo*/}
                                {/*    className="col-auto nord-synth-sub-feature nord-option-on"*/}
                                {/*    data={synth.lfo}*/}
                                {/*/>*/}

                                {/*<Ns3SectionSynthModEnv*/}
                                {/*    className="col-auto  nord-synth-sub-feature nord-option-on"*/}
                                {/*    data={synth.envelopes.modulation}*/}
                                {/*/>*/}

                                {/*<Ns3SectionSynthFilter*/}
                                {/*    className="col-auto  nord-synth-sub-feature nord-option-on"*/}
                                {/*    data={synth.filter}*/}
                                {/*/>*/}

                                {/*<Ns3SectionSynthAmpEnv*/}
                                {/*    className="col-auto  nord-synth-sub-feature nord-option-on"*/}
                                {/*    data={synth.envelopes.amplifier}*/}
                                {/*/>*/}
                            </div>
                        </div>



                        <Ns3Fx data={this.props.effects} source="Synth" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
