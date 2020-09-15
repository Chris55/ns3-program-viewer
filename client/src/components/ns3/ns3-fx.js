import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3FxMulti1 from "./ns3-fx-multi-1";
import Ns3FxMulti2 from "./ns3-fx-multi-2";
import Ns3FxRotarySpeaker from "./ns3-fx-rotary-speaker";

export default class Ns3Fx extends Component {
    render() {
        const data = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className} style={{background: "lightgrey"}}>
                    <div className="d-flex flex-wrap align-items-start">
                        <Ns3FxRotarySpeaker
                            className="ns3-section-fx "
                            data={data.rotarySpeaker}
                            source={this.props.source}
                        />

                        <Ns3FxMulti1 className="ns3-section-fx" data={data.effect1} source={this.props.source} />

                        <Ns3FxMulti2 className="ns3-section-fx" data={data.effect2} source={this.props.source} />

                        {/*<Ns3FxDelay*/}
                        {/*    className="col-auto nord-option-on ns3-section-fx"*/}
                        {/*    data={data.delay}*/}
                        {/*    source={this.props.source}*/}
                        {/*/>*/}

                        {/*<Ns3FxSimAmpEq*/}
                        {/*    className="col-auto nord-option-on ns3-section-fx"*/}
                        {/*    data={data.ampSimEq}*/}
                        {/*    source={this.props.source}*/}
                        {/*/>*/}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
