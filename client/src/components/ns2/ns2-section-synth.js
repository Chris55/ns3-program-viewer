import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns2.css";
import Ns2VolumeAndMore from "./lib/ns2-volume-and-more";
import Ns2Fx from "./ns2-fx";
import Ns2SectionSynthAmpEnv from "./ns2-section-synth-amp-env";
import Ns2SectionSynthFilter from "./ns2-section-synth-filter";
import Ns2SectionSynthModEnv from "./ns2-section-synth-mod-env";
import Ns2SectionSynthLfo from "./ns2-section-synth-lfo";
import NordValueOnOff from "./lib/nord-value-on-off";
import NordLabelAndValue from "./lib/nord-label-and-value";
import Ns2SectionSynthOscillators from "./ns2-section-synth-oscillators";

export default class Ns2SectionSynth extends Component {
    render() {
        const synth = this.props.data;
        const visible = synth.enabled;
        const presetName = "";

        return (
            <React.Fragment>
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "nord-on" : "nord-off"}>
                        <div className="">
                            <div className="row no-gutters">
                                <div className="d-flex">
                                    <Ns2VolumeAndMore name={"SYNTH"} data={synth} />
                                </div>

                                <div className="row no-gutters d-flex flex-wrap">
                                    <div className="row no-gutters flex-column m-1">
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
                                            <NordValueOnOff label="Hold" data={synth.keyboardHold} />
                                        </div>
                                        <div className="nord-name">
                                            <div className={presetName !== "" ? "" : "d-none"}>
                                                <div
                                                    className={
                                                        synth.oscillators.waveForm1.valid ? "nord-font-small" : ""
                                                    }
                                                >
                                                    {presetName}
                                                </div>
                                            </div>
                                            <div className={synth.oscillators.waveForm1.valid ? "" : "nord-font-small"}>
                                                {synth.oscillators.waveForm1.value}
                                            </div>
                                            <div className={synth.oscillators.waveForm1.filename ? "d-none" : ""}>
                                                <small>
                                                    {synth.oscillators.waveForm1.info}{" "}
                                                    {synth.oscillators.waveForm1.version}
                                                </small>
                                            </div>
                                            <div className={synth.oscillators.waveForm1.filename ? "" : "d-none"}>
                                                <small>
                                                    <i>{synth.oscillators.waveForm1.filename}</i>
                                                </small>
                                            </div>
                                        </div>

                                        <div className="row no-gutters d-flex flex-wrap">
                                            <Ns2SectionSynthOscillators
                                                className="nord-synth-sub-feature"
                                                data={synth.oscillators}
                                            />
                                            <span className="m-1" />
                                            <Ns2SectionSynthFilter
                                                className="nord-synth-sub-feature"
                                                data={synth.filter}
                                            />
                                        </div>

                                        <div className="row no-gutters d-flex flex-wrap">
                                            <Ns2SectionSynthLfo className="nord-synth-sub-feature" data={synth.lfo} />
                                            <span className="m-1" />
                                            {/*<Ns2SectionSynthModEnv*/}
                                            {/*    className="nord-synth-sub-feature"*/}
                                            {/*    data={synth.envelopes.modulation}*/}
                                            {/*/>*/}
                                            {/*<span className="m-1" />*/}
                                            {/*<Ns2SectionSynthAmpEnv*/}
                                            {/*    className="nord-synth-sub-feature"*/}
                                            {/*    data={synth.envelopes.amplifier}*/}
                                            {/*/>*/}
                                        </div>
                                    </div>

                                    {/*<Ns2Fx*/}
                                    {/*    className="d-flex"*/}
                                    {/*    data={this.props.effects}*/}
                                    {/*    source="Synth"*/}
                                    {/*    arp={synth.arpeggiator}*/}
                                    {/*/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
