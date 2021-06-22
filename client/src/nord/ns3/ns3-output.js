import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValue from "../lib/nord-label-and-value";

export default class Ns3Output extends Component {
    render() {
        const output = this.props.data;
        const visible = true;
        const align = this.props.other === true ? "align-self-start" : "align-self-center";

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on " + align : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">Output</div>

                            <table className="table-borderless nord-label">
                                <tbody>
                                    <tr>
                                        <td>
                                            Main
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <NordLabelAndValue label="" data={output.main} table={false} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sub
                                        </td>
                                        <td style={{padding: "0 0.5rem"}}>
                                            <NordLabelAndValue label="" data={output.subSource} table={false} />
                                        </td>
                                        <td className={output.subSource.value === "Off" ? "nord-off": ""}>
                                            <NordLabelAndValue label="" data={output.subDestination} table={false} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
