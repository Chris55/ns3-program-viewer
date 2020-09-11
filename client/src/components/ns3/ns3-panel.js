import React, { Component } from "react";
import "./ns3.css";
import Ns3Piano from "./ns3-piano";
import Ns3Organ from "./ns3-organ";
import Ns3Synth from "./ns3-synth";

export default class Ns3Panel extends Component {
    render() {
        const data = this.props.data;

        return (
            <div className="ns3-panel">
                <div className="row">

                    <div className="col-auto d-flex ns3-panel-name">
                        <div className="outer">
                            <div className="inner">
                                <h6>PANEL {this.props.name}</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto">
                        <div className={data.enabled ? "nord-on" : "nord-off"}>

                            <div className="row">
                                <Ns3Organ
                                    className="col-auto ns3-section d-flex"
                                    data={data.organ}
                                    effects={data.effects}
                                />
                            </div>

                            <div className="row">
                                <Ns3Piano
                                    className="col-auto ns3-section d-flex"
                                    data={data.piano}
                                    effects={data.effects}
                                />
                            </div>

                            <div className="row">
                                <Ns3Synth
                                    className="col-auto ns3-section d-flex"
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
        );
    }
}
