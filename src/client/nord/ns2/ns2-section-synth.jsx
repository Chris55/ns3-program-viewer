import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import Ns2VolumeAndMore from "./ns2-volume-and-more";
import Ns2Fx from "./ns2-fx";
import Ns2SectionSynthAmpEnv from "./ns2-section-synth-amp-env";
import Ns2SectionSynthFilter from "./ns2-section-synth-filter";
import Ns2SectionSynthModEnv from "./ns2-section-synth-mod-env";
import Ns2SectionSynthLfo from "./ns2-section-synth-lfo";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValue from "../lib/nord-label-and-value";
import Ns2SectionSynthOscillators from "./ns2-section-synth-oscillators";
import NordSampleWarning from "../lib/nord-sample-warning";

export default class Ns2SectionSynth extends Component {
    render() {
        const synth = this.props.data;
        const ns2s = this.props.ns2s;

        const visible = ns2s || synth.enabled;
        const dimmed = synth.dimmed === true;

        const presetName = "";
        const showSampleNotFoundWarning =
            synth.oscillators.type.value === "SAMPLE" && !synth.oscillators.waveForm1.valid;

        return (
            <div className={visible ? this.props.className : "d-none"}>
                <div className={dimmed ? "nord-dimmed" : "nord-on"}>
                    <div className="">
                        <div className="g-0 d-flex flex-row flex-wrap align-items-start">
                            <div className="">
                                {ns2s && <div style={{ width: "2rem" }} />}
                                {!ns2s && <Ns2VolumeAndMore name={"SYNTH"} data={synth} />}
                            </div>

                            <div className="col g-0  m-1">
                                <div>
                                    <NordLabelAndValue label="Voice" data={synth.voice} />
                                    <span className="m-1" />
                                    <NordLabelAndValue
                                        enabled={synth.voice.value !== "Off"}
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
                                    {!ns2s && <NordValueOnOff label="Hold" data={synth.keyboardHold} />}
                                </div>
                                <div className="nord-name">
                                    <div className={presetName !== "" ? "" : "d-none"}>
                                        <div className={synth.oscillators.waveForm1.valid ? "nord-font-small" : ""}>
                                            {presetName}
                                        </div>
                                    </div>
                                    <div className={synth.oscillators.waveForm1.valid ? "" : "nord-font-small"}>
                                        {synth.oscillators.waveForm1.value}
                                    </div>
                                    <div className={synth.oscillators.waveForm1.filename ? "d-none" : ""}>
                                        <small>
                                            {synth.oscillators.waveForm1.info} {synth.oscillators.waveForm1.version}
                                        </small>
                                    </div>
                                    <div className={synth.oscillators.waveForm1.filename ? "" : "d-none"}>
                                        <small>
                                            <i>{synth.oscillators.waveForm1.filename}</i>
                                        </small>
                                    </div>
                                </div>

                                <div className="g-0 d-flex flex-row flex-wrap align-items-start">
                                    <div className="col">
                                        <Ns2SectionSynthOscillators
                                            className="nord-synth-sub-feature"
                                            data={synth.oscillators}
                                        />
                                    </div>
                                    <div className="col">
                                        <Ns2SectionSynthFilter className="nord-synth-sub-feature" data={synth.filter} />
                                    </div>
                                </div>

                                <div className="g-0 d-flex flex-row flex-wrap align-items-start">
                                    <div className="col">
                                        <Ns2SectionSynthLfo className="nord-synth-sub-feature" data={synth.lfo} />
                                    </div>
                                    <div className="col">
                                        <Ns2SectionSynthModEnv
                                            className="nord-synth-sub-feature"
                                            data={synth.envelopes.modulation}
                                        />
                                    </div>
                                    <div className="col">
                                        <Ns2SectionSynthAmpEnv
                                            className="nord-synth-sub-feature"
                                            data={synth.envelopes.amplifier}
                                        />
                                    </div>
                                </div>
                            </div>

                            {!ns2s && (
                                <Ns2Fx
                                    className="col"
                                    data={this.props.effects}
                                    source="Synth"
                                    arp={synth.arpeggiator}
                                    menu={synth}
                                />
                            )}
                        </div>
                        <NordSampleWarning
                            showSampleLocationWarning={showSampleNotFoundWarning}
                            showSampleNotFoundWarning={showSampleNotFoundWarning}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
