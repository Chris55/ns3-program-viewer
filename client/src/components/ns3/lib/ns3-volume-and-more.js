import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";
import Ns3ValueOnOff from "./ns3-value-on-off";
import Ns3LabelAndValue from "./ns3-label-and-value";

export default class Ns3VolumeAndMore extends Component {
    render() {
        const section = this.props.data;
        const octaveShift =
            (section.octaveShift.value >= 0 ? "+" + section.octaveShift.value : section.octaveShift.value) + " oct";

        const octaveShiftObj = {
            value: octaveShift,
        };

        return (
            <React.Fragment>
                <div className="d-flex flex-wrap">
                    <h6 className="font-weight-bold">{this.props.name}</h6>

                    <Ns3LabelAndValue data={section.volume} />

                    <div className="">
                        <span className={section.kbZone.array[0] ? "dot dot-kb-zone " : "dot"} />
                        <span className={section.kbZone.array[1] ? "dot dot-kb-zone " : "dot"} />
                        <span className={section.kbZone.array[2] ? "dot dot-kb-zone " : "dot"} />
                        <span className={section.kbZone.array[3] ? "dot dot-kb-zone " : "dot"} />
                    </div>

                    <div className="">
                        <Ns3LabelAndValue data={octaveShiftObj} />
                    </div>

                    <div>
                        <Ns3ValueOnOff label="PSTICK" data={section.pitchStick} />

                        <span> </span>

                        <Ns3ValueOnOff label="SUSTPED" data={section.sustainPedal} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
