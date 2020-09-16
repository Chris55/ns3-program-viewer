import React, { Component } from "react";
import "./ns3.css";
import Ns3SectionPiano from "./ns3-section-piano";
import Ns3SectionOrgan from "./ns3-section-organ";
import Ns3SectionSynth from "./ns3-section-synth";
import Ns3FxCompressor from "./ns3-fx-compressor";
import Ns3FxReverb from "./ns3-fx-reverb";

export default class Ns3Panel extends Component {
    render() {
        const data = this.props.data;
        const visible = data.organ.enabled || data.piano.enabled || data.synth.enabled;

        return (
            <div className={visible ? "ns3-panel" : "d-none"}>
                <div className="row no-gutters">
                    <div className="col-1 d-flex flex-wrap ns3-panel-name justify-content-center">
                        <div className="" style={{marginTop: "auto", marginBottom: "auto"}}>

                                <h6>PANEL {this.props.name}</h6>
                                {/*<div className="outer">*/}
                                {/*    <div className="inner">*/}
                                {/*        <h6>PANEL {this.props.name}</h6>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                        </div>
                    </div>
                    {/*ml-n5*/}
                    <div className="col-9">
                        <div className={data.enabled ? "nord-on" : "nord-off"}>
                            <div>
                                <Ns3SectionOrgan
                                    className="ns3-section"
                                    data={data.organ}
                                    effects={data.effects}
                                />
                            </div>

                            <div>
                                <Ns3SectionPiano
                                    className="ns3-section"
                                    data={data.piano}
                                    effects={data.effects}
                                />
                            </div>

                            <div>
                                <Ns3SectionSynth
                                    className="ns3-section"
                                    data={data.synth}
                                    effects={data.effects}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-2  d-flex flex-wrap">
                        <div className="d-flex flex-wrap">
                            <Ns3FxCompressor className="ns3-section-fx align-self-end" data={data.effects.effect1} />
                            <Ns3FxReverb className="ns3-section-fx align-self-start" data={data.effects.effect1} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
