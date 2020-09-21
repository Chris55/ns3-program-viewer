import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";
import Ns3ValueOnOff from "./ns3-value-on-off";
import Ns3LabelAndValue from "./ns3-label-and-value";
import Ns3LabelAndValueWithMorph from "./ns3-label-and-value-with-morph";
import Ns3Label from "./ns3-label";

export default class Ns3VolumeAndMore extends Component {
    render() {
        const section = this.props.data;
        const octaveShift =
            (section.octaveShift.value >= 0 ? "+" + section.octaveShift.value : section.octaveShift.value) + " oct";

        return (
            <React.Fragment>
                <div className="m-1 text-center">
                    <h6 className="mt-1 font-weight-bold">{this.props.name}</h6>

                    <div className="my-2">
                        <Ns3Label label="Level" />
                        <table className="text-left"  style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <tbody>
                            <Ns3LabelAndValueWithMorph data={section.volume} upperCase={false} />
                            </tbody>
                        </table>
                    </div>


                    <div className="">
                        <Ns3Label label="Kb Zone" />
                        <div className="">
                            <span className={section.kbZone.array[0] ? "dot dot-kb-zone " : "dot"} />
                            <span className={section.kbZone.array[1] ? "dot dot-kb-zone " : "dot"} />
                            <span className={section.kbZone.array[2] ? "dot dot-kb-zone " : "dot"} />
                            <span className={section.kbZone.array[3] ? "dot dot-kb-zone " : "dot"} />
                        </div>
                    </div>

                    <div className="">
                        <Ns3LabelAndValue data={{ value: octaveShift }} />
                    </div>

                    <div>
                        <Ns3ValueOnOff label="Pstick" data={section.pitchStick} />

                        <span className="m-1" />

                        <Ns3ValueOnOff label="SustPed" data={section.sustainPedal} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
