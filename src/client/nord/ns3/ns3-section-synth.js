import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";
import Ns3SectionSynthAmpEnv from "./ns3-section-synth-amp-env";
import Ns3SectionSynthFilter from "./ns3-section-synth-filter";
import Ns3SectionSynthModEnv from "./ns3-section-synth-mod-env";
import Ns3SectionSynthLfo from "./ns3-section-synth-lfo";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValue from "../lib/nord-label-and-value";
import Ns3SectionSynthOscillators from "./ns3-section-synth-oscillators";
import { Ns3SectionSynthDisplay } from "./ns3-section-synth-display";
import Ns3SectionSynthPreset from "./ns3-section-synth-preset";

export default class Ns3SectionSynth extends Component {
    render() {
        const synth = this.props.data;
        const ns3y = this.props.ns3y;
        const visible = ns3y || synth.enabled;
        const dimmed = synth.dimmed === true;

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={dimmed ? "nord-dimmed" : "nord-on"}>
                        <div>
                            <div className="no-gutters d-flex flex-row flex-wrap align-items-stretch">
                                <div className="">
                                    {ns3y && <div style={{ width: "2rem" }} />}
                                    {!ns3y && <Ns3VolumeAndMore name={"SYNTH"} data={synth} />}
                                </div>

                                <div className="row no-gutters flex-column m-1">
                                    <div>
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

                                        {!ns3y && <NordValueOnOff label="Kb Hold" data={synth.keyboardHold} />}
                                    </div>

                                    <div className="ns3-lcd-synth">
                                        <Ns3SectionSynthPreset
                                            preset={synth.preset}
                                            ns3y={ns3y}
                                            oscillators={synth.oscillators}
                                        />

                                        <Ns3SectionSynthDisplay
                                            oscType={synth.oscillators.type.value}
                                            oscWaveForm={synth.oscillators.waveForm1}
                                            oscConfig={synth.oscillators.config}
                                            oscPitch={synth.oscillators.pitch}
                                            oscControl={synth.oscillators.control}
                                        />

                                        {synth.oscillators.waveForm1.version && (
                                            <div
                                                className="nord-font-small"
                                                style={{
                                                    margin: "0 5px 5px 5px",
                                                    padding: "0",
                                                    lineHeight: "80%",
                                                }}
                                            >
                                                {synth.oscillators.waveForm1.info} {synth.oscillators.waveForm1.version}
                                            </div>
                                        )}
                                    </div>

                                    <div className="row no-gutters d-flex flex-wrap">
                                        <Ns3SectionSynthOscillators
                                            className="nord-synth-sub-feature"
                                            data={synth.oscillators}
                                        />
                                        <span className="m-1" />
                                        <Ns3SectionSynthFilter className="nord-synth-sub-feature" data={synth.filter} />
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

                                {!ns3y && (
                                    <div className="">
                                        <Ns3Fx
                                            className=""
                                            data={this.props.effects}
                                            source="Synth"
                                            arp={synth.arpeggiator}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
