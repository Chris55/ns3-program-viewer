import React, { Component } from "react";
import "../../lib/ns3.css";
import Ns2SectionSynth from "../ns2-section-synth";

export default class Ns2sSlot extends Component {
    render() {
        const data = this.props.data;
        const visible = true;

        return (
            <div className={visible ? "ns3-panel" : "d-none"}>
                <div className="row no-gutters">
                    <div className="col-sm-0-half d-flex flex-wrap ns3-panel-skin justify-content-center">
                        <div className="" style={{ marginTop: "auto", marginBottom: "auto" }}>
                            <h6>{this.props.name}</h6>
                        </div>
                    </div>
                    {/*ml-n5*/}
                    <div className="">
                        <div>
                            <Ns2SectionSynth className="ns3-section" data={data} effects={undefined} ns2s={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
