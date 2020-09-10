import React, { Component } from "react";
import "./ns3.css";
import Ns3Panel from "./ns3-panel";


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
            pad("   ", data.split.low.width, true) +
            "  " +
            pad("   ", data.split.mid.width, true) +
            "  " +
            pad("   ", data.split.high.width, true);
        const splitNote =
            pad("   ", data.split.low.note, true) +
            "  " +
            pad("   ", data.split.mid.note, true) +
            "  " +
            pad("   ", data.split.high.note, true);

        return (
            <div className="container-fluid ns3">
                <div className="row ns3-header">
                    <div className="col">
                        <div className="ns3-header-name">Program: {data.name}</div>
                    </div>
                    <div className="col text-right">
                        <small>Master Clock Rate</small>
                        <br />
                        <small>{data.masterClock.rate}</small>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div  className={data.split.enabled ? "col nord-option-on text-right" : "col nord-option-off"}>
                                <small>SPLIT </small>
                            </div>
                            <div className={data.split.enabled ? "col nord-split" : "col d-none"}>
                                <small>{splitWidth}</small>
                                <br />
                                <small>{splitNote}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={data.panelA.enabled ? "nord-on" : "nord-off"}>
                            <Ns3Panel name={"A"} data={data.panelA} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={data.panelB.enabled ? "nord-on" : "nord-off"}>
                            <Ns3Panel name={"B"} data={data.panelB} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
