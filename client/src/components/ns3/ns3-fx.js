import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3FxMulti1 from "./ns3-fx-multi-1";
import Ns3FxMulti2 from "./ns3-fx-multi-2";
import Ns3FxRotarySpeaker from "./ns3-fx-rotary-speaker";
import Ns3SectionSynthArp from "./ns3-section-synth-arp";
import Ns3FxDelay from "./ns3-fx-delay";
import Ns3FxAmpSimEq from "./ns3-fx-amp-sim-eq";

export default class Ns3Fx extends Component {
    render() {
        const data = this.props.data;

        let arp;
        if (this.props.arp === undefined) {
            arp = <> </>;
        } else {
            arp = <Ns3SectionSynthArp
                className="nord-synth-sub-feature"
                data={this.props.arp} />;
        }

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="d-flex flex-wrap align-items-start">
                        {arp}

                        <Ns3FxRotarySpeaker
                            className="ns3-section-fx"
                            data={data.rotarySpeaker}
                            source={this.props.source}
                        />

                        <Ns3FxMulti1 className="ns3-section-fx" data={data.effect1} source={this.props.source} />

                        <Ns3FxMulti2 className="ns3-section-fx" data={data.effect2} source={this.props.source} />

                        <Ns3FxDelay className="ns3-section-fx" data={data.delay} source={this.props.source} />

                        <Ns3FxAmpSimEq className="ns3-section-fx" data={data.ampSimEq} source={this.props.source} />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
