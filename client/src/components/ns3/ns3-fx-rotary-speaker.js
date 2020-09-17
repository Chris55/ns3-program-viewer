import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";

export default class Ns3FxRotarySpeaker extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source.value === this.props.source;

        const speedMorph =
            fx.speed.morph.wheel.enabled || fx.speed.morph.afterTouch.enabled || fx.speed.morph.controlPedal.enabled;

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">
                                ROTARY
                                <br />
                                SPEAKER
                            </div>

                            <div className="">
                                <Ns3LabelAndValue label="Drive" data={fx.drive} />
                            </div>

                            <div className="">
                                <Ns3ValueOnOff label="Stop Mode" data={fx.stopMode} />
                            </div>

                            <div className="">
                                <div className="">
                                    <span className={speedMorph ? "dot dot-morph" : "d-none"} />

                                    <Ns3LabelAndValue data={fx.speed} />
                                </div>
                                <div className={fx.speed.morph.wheel.enabled ? "" : "d-none"}>
                                    <span className="nord-morph">Wheel</span>
                                </div>
                                <div className={fx.speed.morph.afterTouch.enabled ? "" : "d-none"}>
                                    <span className="nord-morph">A-Touch</span>
                                </div>
                                <div className={fx.speed.morph.controlPedal.enabled ? "" : "d-none"}>
                                    <span className="nord-morph">CtrlPed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
