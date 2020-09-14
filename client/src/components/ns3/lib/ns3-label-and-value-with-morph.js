import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";
import Ns3Label from "./ns3-label";
import Ns3LabelAndValue from "./ns3-label-and-value";

export default class Ns3LabelAndValueWithMorph extends Component {
    render() {
        const data = this.props.data;
        const morphing =
            data.morph &&
            (data.morph.wheel.enabled || data.morph.afterTouch.enabled || data.morph.controlPedal.enabled);

        return (
            <React.Fragment>
                <td className="align-top">
                    <Ns3Label label={this.props.label} />
                </td>

                <td className="align-top">
                    <span className={morphing ? "dot dot-morph" : "d-none"} />
                </td>

                {/*<td className="align-top">*/}
                {/*    <table className="table-borderless">*/}
                {/*        <tbody>*/}
                {/*            <tr>*/}
                {/*                <td className="align-top">*/}
                {/*                    <Ns3LabelAndValue data={data} />*/}
                {/*                </td>*/}
                {/*                <td className="align-top">*/}
                {/*                    <ul className="list-unstyled">*/}
                {/*                        <li className={data.morph.wheel.enabled ? "" : "d-none"}>*/}
                {/*                            <span className="nord-morph">WHEEL</span>*/}
                {/*                            <Ns3LabelAndValue data={data.morph.wheel.to} />*/}
                {/*                        </li>*/}

                {/*                        <li className={data.morph.afterTouch.enabled ? "" : "d-none"}>*/}
                {/*                            <span className="nord-morph">A-TOUCH</span>*/}
                {/*                            <Ns3LabelAndValue data={data.morph.afterTouch.to} />*/}
                {/*                        </li>*/}

                {/*                        <li className={data.morph.controlPedal.enabled ? "" : "d-none"}>*/}
                {/*                            <span className="nord-morph">CTRLPED</span>*/}
                {/*                            <Ns3LabelAndValue data={data.morph.controlPedal.to} />*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </td>*/}
                {/*            </tr>*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</td>*/}

                <td className="align-top">
                    <table className="table-borderless">
                        <tbody>
                        <tr>
                            <td className="align-top">
                                <Ns3LabelAndValue data={data} />
                            </td>
                            <td className="align-top">
                                <ul className="list-unstyled">
                                    <li className={data.morph.wheel.enabled ? "" : "d-none"}>
                                        <span className="nord-morph">WHEEL</span>
                                        <Ns3LabelAndValue data={data.morph.wheel.to} />
                                    </li>

                                    <li className={data.morph.afterTouch.enabled ? "" : "d-none"}>
                                        <span className="nord-morph">A-TOUCH</span>
                                        <Ns3LabelAndValue data={data.morph.afterTouch.to} />
                                    </li>

                                    <li className={data.morph.controlPedal.enabled ? "" : "d-none"}>
                                        <span className="nord-morph">CTRLPED</span>
                                        <Ns3LabelAndValue data={data.morph.controlPedal.to} />
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </React.Fragment>
        );
    }
}
