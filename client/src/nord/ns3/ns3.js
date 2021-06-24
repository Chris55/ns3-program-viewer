import React, { Component } from "react";
import "../lib/ns3.css";
import Ns3Panel from "./ns3-panel";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordLabel from "../lib/nord-label";
import NordValueOnOff from "../lib/nord-value-on-off";

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
                            {data.description} ({data.ext})   <small>Version</small> {data.version.value}   <small>Category</small> {data.category}
                        </div>
                    </div>

                    <div className="col">
                        <div className="row no-gutters justify-content-between d-flex flex-wrap">
                            <div className="col-2 text-right nord-option-on">
                                <NordLabel label="Master Clock" />
                                <br />
                                <NordLabelAndValue data={data.masterClock.rate} />
                            </div>
                            <div className="col-1 text-right nord-option-on">
                                <NordLabel label="Transpose" enabled={data.transpose.enabled} />
                                <br />
                                <NordLabelAndValue data={data.transpose} enabled={data.transpose.enabled} />
                            </div>
                            <div className={data.split.enabled ? "col-1 text-right mr-1" : "col-1 text-right mr-1"}>
                                <NordLabel enabled={data.split.enabled} label="Split" />
                            </div>

                            <div className={data.split.enabled ? "col-1 mt-1" : "d-none"}>
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
                                <NordValueOnOff data={data.dualKeyboard} label="Dual KB" />
                                <br />
                                <NordLabelAndValue enabled={data.dualKeyboard.enabled} data={data.dualKeyboard.style} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className={data.panelA.enabled ? "nord-on" : "nord-off-2"}>
                            <Ns3Panel name="A" data={data.panelA} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className={data.panelB.enabled ? "nord-on" : "nord-off-2"}>
                            <Ns3Panel name="B" data={data.panelB} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
