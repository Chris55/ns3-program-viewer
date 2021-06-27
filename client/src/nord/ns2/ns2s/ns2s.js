import React, { Component } from "react";
import "../../lib/ns3.css";
import Ns2sSlot from "./ns2s-slot";

export default class Ns2s extends Component {
    render() {
        const data = this.props.data;

        return (
            <div className="">
                <div className="row no-gutters ns3-header justify-content-between d-flex flex-wrap">
                    <div className="col align-self-center">
                        <h3 className="ns3-header-name">
                            {data.id.name} {data.name}
                        </h3>
                        <div className="nord-option-on">
                            {data.description} ({data.ext})   <small>Version</small> {data.version.value}   <small>Category</small> {data.category}
                        </div>
                    </div>

                    <div className="col">
                        <div className="row no-gutters justify-content-between d-flex flex-wrap">

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="nord-on">
                            <Ns2sSlot name="" data={data.synth} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
