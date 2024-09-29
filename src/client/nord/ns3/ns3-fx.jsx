import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import Ns3FxMulti1 from "./ns3-fx-multi-1";
import Ns3FxMulti2 from "./ns3-fx-multi-2";
import Ns3FxRotarySpeaker from "./ns3-fx-rotary-speaker";
import Ns3SectionSynthArp from "./ns3-section-synth-arp";
import Ns3FxDelay from "./ns3-fx-delay";
import Ns3FxAmpSimEq from "./ns3-fx-amp-sim-eq";

const getOrientation = () => {
    return window.innerWidth < 430 ? "flex-column" : "flex-row";
};

export default class Ns3Fx extends Component {
    state = {
        width: window.innerWidth, //height: 0,
        orientation: getOrientation(),
    };

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth,
            //height: window.innerHeight,
            orientation: getOrientation(),
        });
    };
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        const data = this.props.data;

        let arp;
        if (this.props.arp === undefined) {
            arp = <></>;
        } else {
            arp = <Ns3SectionSynthArp className="nord-synth-sub-feature" data={this.props.arp} />;
        }

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className={`no-gutters d-flex flex-wrap ${this.state.orientation}`}>
                        {arp}

                        {data && (
                            <>
                                {/*<div>{this.state.width}</div>*/}
                                <Ns3FxMulti1
                                    className="ns3-section-fx"
                                    data={data.effect1}
                                    source={this.props.source}
                                />

                                <Ns3FxMulti2
                                    className="ns3-section-fx"
                                    data={data.effect2}
                                    source={this.props.source}
                                />

                                <Ns3FxDelay className="ns3-section-fx" data={data.delay} source={this.props.source} />

                                <Ns3FxAmpSimEq
                                    className="ns3-section-fx"
                                    data={data.ampSimEq}
                                    source={this.props.source}
                                />

                                <Ns3FxRotarySpeaker
                                    className="ns3-section-fx"
                                    data={data.rotarySpeaker}
                                    source={this.props.source}
                                />
                            </>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
