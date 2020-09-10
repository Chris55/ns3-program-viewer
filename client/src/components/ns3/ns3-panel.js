import React, { Component } from "react";
import "./ns3.css";
import Ns3Piano from "./ns3-piano";
import Ns3Organ from "./ns3-organ";
import Ns3Synth from "./ns3-synth";
import Ns3Fx1 from "./ns3-fx1";
import Ns3Fx2 from "./ns3-fx2";
import Ns3Delay from "./ns3-delay";
import Ns3Equalizer from "./ns3-equalizer";

export default class Ns3Panel extends Component {
    render() {
        const data = this.props.data;

        return (
            <div className="ns3-panel">
                <div className="row">
                    <div className="col-auto d-flex">
                        <div className="outer">
                            <div className="inner">PANEL {this.props.name}</div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className={data.enabled ? "nord-on" : "nord-off"}>
                            <div className="row">
                                <Ns3Piano className="col-auto ns3-section d-flex" data={data.piano} />

                                <Ns3Fx1
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.effect1}
                                    source="Piano"
                                />

                                <Ns3Fx2
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.effect2}
                                    source="Piano"
                                />

                                <Ns3Delay
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.delay}
                                    source="Piano"
                                />

                                <Ns3Equalizer
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.ampSimEq}
                                    source="Piano"
                                />
                            </div>

                            <div className="row">
                                <Ns3Organ className="col-auto ns3-section d-flex" data={data.organ} />

                                <Ns3Fx1
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.effect1}
                                    source="Organ"
                                />

                                <Ns3Fx2
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.effect2}
                                    source="Organ"
                                />

                                <Ns3Delay
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.delay}
                                    source="Organ"
                                />

                                <Ns3Equalizer
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.ampSimEq}
                                    source="Organ"
                                />
                            </div>

                            <div className="row">
                                <Ns3Synth className="col-auto ns3-section d-flex" data={data.synth} />

                                <Ns3Fx1
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.effect1}
                                    source="Synth"
                                />

                                <Ns3Fx2
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.effect2}
                                    source="Synth"
                                />

                                <Ns3Delay
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.delay}
                                    source="Synth"
                                />

                                <Ns3Equalizer
                                    className="col-auto ns3-section-fx d-flex"
                                    data={data.effects.ampSimEq}
                                    source="Synth"
                                />
                            </div>

                            {/*<div className="ns3-section">*/}
                            {/*    <Ns3Organ data={data.organ} />*/}
                            {/*</div>*/}

                            {/*<div className="ns3-section">*/}
                            {/*    <Ns3Synth data={data.synth} />*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <div className="col-auto d-flex">
                        <div className="outer">
                            <div className="inner">PANEL {this.props.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
