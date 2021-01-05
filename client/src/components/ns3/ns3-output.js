import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";
import NordLabel from "../lib/nord-label";

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
                                            {output.main.value}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sub
                                        </td>
                                        <td style={{padding: "0 0.5rem"}}>
                                            {output.subSource.value}
                                        </td>
                                        <td className={output.subSource.value === "Off" ? "nord-off": ""}>
                                            {output.subDestination.value}
                                        </td>
                                    </tr>
                                    {/*<tr>*/}
                                    {/*    <NordLabelAndValue label="Out" data={output.main} table={true} />*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*    <NordLabel label="Sub" table={true} />*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*    <NordLabelAndValue label="Source" data={output.subSource} table={true} />*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*    <NordLabelAndValue label="Out" data={output.subDestination} table={true} />*/}
                                    {/*</tr>*/}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
