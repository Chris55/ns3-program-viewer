import React, { Component } from "react";
import "../lib/ns3.css";
import Ns2SectionPiano from "./ns2-section-piano";
import Ns2SectionOrgan from "./ns2-section-organ";
import Ns2SectionSynth from "./ns2-section-synth";

export default class Ns2Slot extends Component {
    render() {
        const data = this.props.data;
        const visible = data.organ.enabled || data.piano.enabled || data.synth.enabled || data.extern.enabled;

        return (
            <div className={visible ? "ns3-panel" : "d-none"}>
                <div className="row no-gutters">
                    <div className="col-sm-0-half d-flex flex-wrap ns3-panel-name justify-content-center">
                        <div className="" style={{marginTop: "auto", marginBottom: "auto"}}>
                                <h6>{this.props.name}</h6>
                        </div>
                    </div>
                    {/*ml-n5*/}
                    <div className="col">
                        {/*<div className={data.enabled ? "nord-on" : "nord-off"}>*/}
                            <div>
                                <Ns2SectionOrgan
                                    className="ns3-section"
                                    data={data.organ}
                                    effects={data.effects}
                                />
                            </div>

                            <div>
                                <Ns2SectionPiano
                                    className="ns3-section"
                                    data={data.piano}
                                    effects={data.effects}
                                />
                            </div>

                            <div>
                                <Ns2SectionSynth
                                    className="ns3-section"
                                    data={data.synth}
                                    effects={data.effects}
                                />
                            </div>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
