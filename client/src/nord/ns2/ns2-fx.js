import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import Ns2FxMulti1 from "./ns2-fx-multi-1";
import Ns2FxMulti2 from "./ns2-fx-multi-2";
import Ns2FxRotarySpeaker from "./ns2-fx-rotary-speaker";
import Ns2SectionSynthArp from "./ns2-section-synth-arp";
import Ns2FxDelay from "./ns2-fx-delay";
import Ns2FxAmpSimEq from "./ns2-fx-amp-sim-eq";
import Ns2Output from "./ns2-output";

const getOrientation = () => {
    //return window.matchMedia("(orientation: portrait)").matches ? "flex-column" : "flex-row";
    return window.innerWidth < 430 ? "flex-column" : "flex-row";
};

export default class Ns2Fx extends Component {
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
            arp = <> </>;
        } else {
            arp = <Ns2SectionSynthArp className="nord-synth-sub-feature" data={this.props.arp} />;
        }

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className={`no-gutters d-flex flex-wrap ${this.state.orientation}`}>
                        {arp}

                        {/*<div>{this.state.width}</div>*/}

                        <Ns2FxMulti1 className="ns3-section-fx" data={data.effect1} source={this.props.source} />

                        <Ns2FxMulti2 className="ns3-section-fx" data={data.effect2} source={this.props.source} />

                        <Ns2FxDelay className="ns3-section-fx" data={data.delay} source={this.props.source} />

                        <Ns2FxAmpSimEq className="ns3-section-fx" data={data.ampSimEq} source={this.props.source} />

                        <Ns2FxRotarySpeaker
                            className="ns3-section-fx"
                            data={data.rotarySpeaker}
                            source={this.props.source}
                        />

                        <Ns2Output className="ns3-section-main-fx" menu={this.props.menu} other={false} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
