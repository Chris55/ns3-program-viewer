import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";
import Ns3Fx from "./ns3-fx";

export default class Ns3SectionSynth extends Component {
    render() {
        const synth = this.props.data;
        const visible = synth.enabled;

        return (
            <React.Fragment>
                {/*<div className={this.props.className}>*/}
                    <div className={visible ? this.props.className : "d-none"}>
                        <div className={visible ? "row nord-on" : "row nord-off"}>
                            <div className="col-auto text-center">
                                <Ns3VolumeAndMore name={"SYNTH"} data={synth} />
                            </div>

                            <div className="col-auto align-self-lg-auto">
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
                                                {synth.oscillators.control.label} {synth.oscillators.pitch.label}
                                            </small>
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            className={
                                                synth.oscillators.fastAttack ? "nord-option-on" : "nord-option-off"
                                            }
                                        >
                                            <small>FAST ATK</small>
                                        </span>

                                        <span> </span>

                                        <span className="nord-option-on">
                                            <small>Modulation </small>
                                            <small>LFO Amount {synth.oscillators.modulations.lfoAmount.label} </small>
                                            <small>
                                                Mod Env Amount {synth.oscillators.modulations.lfoAmount.label}{" "}
                                            </small>
                                        </span>
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
