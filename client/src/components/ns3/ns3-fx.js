import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3FxMulti1 from "./ns3-fx-multi-1";
import Ns3FxMulti2 from "./ns3-fx-multi-2";
import Ns3FxSimAmpEq from "./ns3-fx-sim-amp-eq";
import Ns3FxRotarySpeaker from "./ns3-fx-rotary-speaker";
import Ns3FxDelay from "./ns3-fx-delay";

export default class Ns3Fx extends Component {
    render() {
        const data = this.props.data;

        return (
            <React.Fragment>
                <Ns3FxRotarySpeaker
                    className="col-auto nord-option-on ns3-section-fx"
                    data={data.rotarySpeaker}
                    source={this.props.source}
                />

                <Ns3FxMulti1
                    className="col-auto nord-option-on ns3-section-fx"
                    data={data.effect1}
                    source={this.props.source}
                />

                <Ns3FxMulti2
                    className="col-auto nord-option-on ns3-section-fx"
                    data={data.effect2}
                    source={this.props.source}
                />

                <Ns3FxDelay
                    className="col-auto nord-option-on ns3-section-fx"
                    data={data.delay}
                    source={this.props.source}
                />

                <Ns3FxSimAmpEq
                    className="col-auto nord-option-on ns3-section-fx"
                    data={data.ampSimEq}
                    source={this.props.source}
                />
            </React.Fragment>
        );
    }
}
