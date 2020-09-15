import React, { Component } from "react";
import "./ns3.css";
import Ns3Panel from "./ns3-panel";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3Label from "./lib/ns3-label";


function pad(pad, str, padLeft) {
    if (typeof str === "undefined") return pad;
    if (padLeft) {
        return (pad + str).slice(-pad.length);
    } else {
        return (str + pad).substring(0, pad.length);
    }
}

export default class Ns3 extends Component {
    render() {
        const data = this.props.data;
        const splitWidth =
            pad("    ", data.split.low.width, true) +
            "  " +
            pad("    ", data.split.mid.width, true) +
            "  " +
            pad("    ", data.split.high.width, true);
        const splitNote =
            pad("    ", data.split.low.note, true) +
            "  " +
            pad("    ", data.split.mid.note, true) +
            "  " +
            pad("     ", data.split.high.note, true);

        return (
            <div className={data.panelA.enabled === false && data.panelB.enabled === false ? "d-none": ""}>

                <div className="row no-gutters ns3-header justify-content-between">
                    <div className="col align-self-center">
                        <h3 className="ns3-header-name">{data.name}</h3>
                        <div className="nord-option-on">Category {data.category} <small className="nord-option-on">V{data.version}</small></div>
                    </div>

                    <div className="col-2 text-right nord-option-on">
                        <Ns3Label
                            label="Master Clock Rate"
                        />
                        <br/>
                        <Ns3LabelAndValue
                            data={data.masterClock.rate}
                        />
                    </div>
                    <div className="col-2">
                        <div className="row no-gutters ">
                            <div  className="col text-right">
                                <Ns3Label
                                    enabled={data.split.enabled}
                                    label="Split"
                                />
                            </div>
                            <div className={data.split.enabled ? "col nord-split" : "col d-none"}>
                                <span>{splitWidth}</span>
                                <br />
                                <span>{splitNote}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className={data.panelA.enabled ? "nord-on" : "nord-off"}>
                            <Ns3Panel name="A" data={data.panelA} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className={data.panelB.enabled ? "nord-on" : "nord-off"}>
                            <Ns3Panel name="B" data={data.panelB} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
