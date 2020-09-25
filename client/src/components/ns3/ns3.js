import React, { Component } from "react";
import "./ns3.css";
import Ns3Panel from "./ns3-panel";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3Label from "./lib/ns3-label";

export default class Ns3 extends Component {
    render() {
        const data = this.props.data;

        return (
            <div className={data.panelA.enabled === false && data.panelB.enabled === false ? "d-none" : ""}>
                <div className="row no-gutters ns3-header justify-content-between d-flex flex-wrap">
                    <div className="col align-self-center">
                        <h3 className="ns3-header-name">
                            {data.id.name} {data.name}
                        </h3>
                        <div className="nord-option-on">
                            Category {data.category} <small className="nord-option-on">V{data.version}</small>
                        </div>
                    </div>

                    <div className="col-2 text-right nord-option-on">
                        <Ns3Label label="Master Clock Rate" />
                        <br />
                        <Ns3LabelAndValue data={data.masterClock.rate} />
                    </div>
                    <div className={data.split.enabled ? "col-1 text-right mr-1" : "col-1 text-right mr-1"  }>
                        <Ns3Label enabled={data.split.enabled} label="Split" />
                    </div>
                    <div className={data.split.enabled ? "col-1" : "d-none"}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="nord-split ">{data.split.low.width}</span>
                                    </td>
                                    <td>
                                        <span className="nord-split ">{data.split.mid.width}</span>
                                    </td>
                                    <td>
                                        <span className="nord-split ">{data.split.high.width}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="nord-split ">{data.split.low.note}</span>
                                    </td>
                                    <td>
                                        <span className="nord-split ">{data.split.mid.note}</span>
                                    </td>
                                    <td>
                                        <span className="nord-split ">{data.split.high.note}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-1 text-right nord-option-on">
                        <Ns3Label enabled={data.dualKeyboard.enabled} label="Dual KB" />
                        <br />
                        <Ns3LabelAndValue enabled={data.dualKeyboard.enabled} data={data.dualKeyboard} />
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
