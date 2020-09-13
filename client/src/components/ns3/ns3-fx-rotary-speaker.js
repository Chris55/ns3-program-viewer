import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3Label from "./lib/ns3-label";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";

export default class Ns3FxRotarySpeaker extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source.value === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="col text-center">
                            <div className="font-weight-bold">ROTARY SPEAKER</div>

                            <div className="">
                                <Ns3Label label="Drive "/>
                                <Ns3LabelAndValue data={fx.drive}/>
                            </div>

                            <div className="">
                                <Ns3Label label="Stop Mode "/>
                                <Ns3ValueOnOff data={fx.stopMode}/>
                            </div>

                            <div className="">
                                {/*<Ns3Label label="Speed "/>*/}
                                <Ns3LabelAndValue data={fx.speed}/>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
