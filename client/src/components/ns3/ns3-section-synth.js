import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";

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
                {/*<div className={this.props.className}>*/}
                <div className={visible ? this.props.className : "d-none"}>
                    <div className={visible ? "row nord-on" : "row nord-off"}>
                        <div className="col-auto text-center">
                            <Ns3VolumeAndMore name={"SYNTH"} data={synth} />
                        </div>

                        <div className="col-auto align-self-lg-auto">
                            <div>
                                <span className="nord-option-on">
                                    <small>Voice {synth.voice}</small>
                                </span>

                                <span> </span>

                                <span className={synth.voice !== "Poly" ? "nord-option-on" : "nord-option-off"}>
                                    <small>Glide Rate {synth.glide}</small>
                                </span>

                                <span> </span>

                                <span className={synth.unison !== "Off" ? "nord-option-on" : "nord-option-off"}>
                                    <small>Unison {synth.unison}</small>
                                </span>

                                <span> </span>

                                <span className={synth.vibrato !== "Off" ? "nord-option-on" : "nord-option-off"}>
                                    <small>Vibrato {synth.vibrato}</small>
                                </span>
                            </div>

                            <div className="nord-name">{synth.oscillators.waveForm1}</div>

                            <div>
                                <div>
                                    <span className="nord-option-on">
                                        <small>Type {synth.oscillators.type}</small>
                                    </span>

                                    <span> </span>

                                    <span className="nord-option-on">
                                        <small>{synth.oscillators.config}</small>
                                    </span>

                                    <span> </span>

                                    <span className="nord-option-on">
                                        <small>
                                            OSC CTRL {synth.oscillators.control.label} {synth.oscillators.pitch.label}
                                        </small>
                                    </span>
                                </div>

                                <div>
                                    <span
                                        className={synth.oscillators.fastAttack ? "nord-option-on" : "nord-option-off"}
                                    >
                                        <small>FAST ATK</small>
                                    </span>

                                    <span> </span>

                                    <span className="nord-option-on">
                                        <small>
                                            {lfoModEnvTitle} {lfoModEnvValue}
                                        </small>
                                    </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-auto">
                                    <div className="nord-synth-sub-feature text-start">
                                        <h6>LFO</h6>
                                        <div className="nord-option-on">
                                            <small>Rate {synth.lfo.rate.label}</small>
                                        </div>

                                        <div className="nord-option-on">
                                            <small>Wave {synth.lfo.wave}</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    {/*<div className="nord-option-on">*/}
                                    {/*    <small>LFO Rate {synth.lfo.rate.label}</small>*/}
                                    {/*</div>*/}

                                    {/*<div className="nord-option-on">*/}
                                    {/*    <small>LFO Wave {synth.lfo.wave}</small>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        <Ns3Fx
                            className="col-auto  d-flex align-items-stretch"
                            data={this.props.effects}
                            source="Synth"
                        />
                    </div>
                </div>
                {/*</div>*/}
            </React.Fragment>
        );
    }
}
