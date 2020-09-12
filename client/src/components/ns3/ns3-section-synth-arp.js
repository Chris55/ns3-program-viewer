import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3SectionSynthArp extends Component {
    render() {
        const arp = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="justify-content-center">

                        <div
                            className={
                                arp.enabled
                                    ? "col-auto nord-synth-sub-feature nord-on"
                                    : "col-auto nord-synth-sub-feature nord-off"
                            }
                        >
                            <div>
                                <strong>ARP</strong>
                            </div>
                            <div>
                                <span className={arp.enabled ? "nord-option-on" : "nord-option-off"}>
                                    <small>Run</small>
                                </span>

                                <span> </span>

                                <span className={arp.kbSync ? "nord-option-on" : "nord-option-off"}>
                                    <small>Kb Sync</small>
                                </span>
                            </div>
                            <div>
                                <span className={arp.masterClock ? "nord-option-on" : "nord-option-off"}>
                                    <small>MST CLK</small>
                                </span>

                                <span> </span>

                                <span className="nord-option-on">
                                    <small>{arp.rate.label}</small>
                                </span>
                            </div>
                            <div>
                                <span className="nord-option-on">
                                    <small>{arp.range}</small>
                                </span>

                                <span> </span>

                                <span className="nord-option-on">
                                    <small>{arp.pattern}</small>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
