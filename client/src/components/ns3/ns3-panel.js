import React, { Component } from "react";
import "./ns3.css";
import Ns3SectionPiano from "./ns3-section-piano";
import Ns3SectionOrgan from "./ns3-section-organ";
import Ns3SectionSynth from "./ns3-section-synth";

export default class Ns3Panel extends Component {
    render() {
        const data = this.props.data;
        const visible = data.organ.enabled || data.piano.enabled || data.synth.enabled;

        return (
            <div className="ns3-panel">
                <div className={visible ? "" : "d-none"}>
                    <div className="row">
                        <div className="col-1 d-flex ns3-panel-name">
                            <div className="outer">
                                <div className="inner">
                                    <h6>PANEL {this.props.name}</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-10">
                            <div className={data.enabled ? "nord-on" : "nord-off"}>
                                <div className="row">
                                    <Ns3SectionOrgan
                                        className="col-12 ns3-section"
                                        data={data.organ}
                                        effects={data.effects}
                                    />
                                </div>

                                <div className="row">
                                    <Ns3SectionPiano
                                        className="col-12 ns3-section d-flex"
                                        data={data.piano}
                                        effects={data.effects}
                                    />
                                </div>

                                <div className="row">
                                    <Ns3SectionSynth
                                        className="col-12 ns3-section d-flex"
                                        data={data.synth}
                                        effects={data.effects}
                                    />
                                </div>
                            </div>
                        </div>

                        {/*<div className="col-auto d-flex">*/}
                        {/*    <div className="outer">*/}
                        {/*        <div className="inner">PANEL {this.props.name}</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
