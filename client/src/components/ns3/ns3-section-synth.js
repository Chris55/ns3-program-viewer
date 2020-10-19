import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./lib/ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";
import Ns3SectionSynthAmpEnv from "./ns3-section-synth-amp-env";
import Ns3SectionSynthFilter from "./ns3-section-synth-filter";
import Ns3SectionSynthModEnv from "./ns3-section-synth-mod-env";
import Ns3SectionSynthLfo from "./ns3-section-synth-lfo";
import NordValueOnOff from "./lib/nord-value-on-off";
import NordLabelAndValue from "./lib/nord-label-and-value";
import Ns3SectionSynthOscillators from "./ns3-section-synth-oscilaltors";

export default class Ns3SectionSynth extends Component {
    render() {
        const synth = this.props.data;
        const visible = synth.enabled;
        const presetName = synth.preset?.presetName !== synth.oscillators.waveForm1.value ? synth.preset?.presetName: "";

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "nord-on" : "nord-off"}>
                        <div className="">
                            <div className="row no-gutters">
                                <div className="d-flex">
                                    <Ns3VolumeAndMore name={"SYNTH"} data={synth} />
                                </div>

                                <div className="row no-gutters d-flex flex-wrap">
                                    <div className="row no-gutters flex-column m-1">
                                        <div >
                                            <NordLabelAndValue label="Voice" data={synth.voice} />
                                            <span className="m-1" />
                                            <NordLabelAndValue
                                                enabled={synth.voice.value !== "Poly"}
                                                label="Glide Rate"
                                                data={synth.glide}
                                            />
                                            <span className="m-1" />
                                            <NordLabelAndValue
                                                enabled={synth.unison.value !== "Off"}
                                                label="Unison"
                                                data={synth.unison}
                                            />
                                            <span className="m-1" />
                                            <NordLabelAndValue
                                                enabled={synth.vibrato.value !== "Off"}
                                                label="Vibrato"
                                                data={synth.vibrato}
                                            />
                                            <span className="m-1" />
                                            <NordValueOnOff label="Kb Hold" data={synth.keyboardHold} />
                                        </div>
                                        <div className="nord-name">
                                            <div className={presetName !== "" ? "": "d-none"}>
                                                <div className={synth.oscillators.waveForm1.valid ? "nord-font-small": ""}>
                                                    {presetName}
                                                </div>
                                            </div>
                                            <div className={synth.oscillators.waveForm1.valid ? "": "nord-font-small"}>{
                                                synth.oscillators.waveForm1.value}</div>
                                            <div ><small>{synth.oscillators.waveForm1.info} {synth.oscillators.waveForm1.version}</small></div>
                                        </div>

                                        <div className="row no-gutters d-flex flex-wrap">
                                            <Ns3SectionSynthOscillators
                                                className="nord-synth-sub-feature"
                                                data={synth.oscillators}
                                            />
                                            <span className="m-1" />
                                            <Ns3SectionSynthFilter
                                                className="nord-synth-sub-feature"
                                                data={synth.filter}
                                            />
                                        </div>

                                        <div className="row no-gutters d-flex flex-wrap">
                                            <Ns3SectionSynthLfo className="nord-synth-sub-feature" data={synth.lfo} />
                                            <span className="m-1" />
                                            <Ns3SectionSynthModEnv
                                                className="nord-synth-sub-feature"
                                                data={synth.envelopes.modulation}
                                            />
                                            <span className="m-1" />
                                            <Ns3SectionSynthAmpEnv
                                                className="nord-synth-sub-feature"
                                                data={synth.envelopes.amplifier}
                                            />
                                        </div>

                                    </div>

                                    <Ns3Fx
                                        className="d-flex"
                                        data={this.props.effects}
                                        source="Synth"
                                        arp={synth.arpeggiator}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
