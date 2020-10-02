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
            <>
                <tr>
                    <td className="">
                        <Ns3Label label={this.props.label} />
                    </td>

                    <td className=" text-right">
                        <span className={morphing ? "dot dot-morph" : "d-none"} />
                    </td>

                    <td className="">
                        <Ns3LabelAndValue
                            data={data}
                            valueClass={this.props.valueClass}
                            upperCase={this.props.upperCase}
                        />
                    </td>
                </tr>

                <tr className={data.morph.wheel.enabled ? "" : "d-none"}>
                    <td colSpan="2" className="text-right nord-morph-space">
                        <span className="nord-morph">Wheel</span>
                    </td>
                    <td>
                        <Ns3LabelAndValue
                            data={data.morph.wheel.to}
                            upperCase={this.props.upperCase}
                            valueClass={this.props.valueClass}
                        />
                    </td>
                </tr>

                <tr className={data.morph.afterTouch.enabled ? "" : "d-none"}>
                    <td colSpan="2" className="text-right nord-morph-space">
                        <span className="nord-morph">A-Touch</span>
                    </td>
                    <td className="nord-morph-space">
                        <Ns3LabelAndValue
                            data={data.morph.afterTouch.to}
                            upperCase={this.props.upperCase}
                            valueClass={this.props.valueClass}
                        />
                    </td>
                </tr>

                <tr className={data.morph.controlPedal.enabled ? "" : "d-none"}>
                    <td colSpan="2" className="text-right">
                        <span className="nord-morph">CtrlPed</span>
                    </td>
                    <td>
                        <Ns3LabelAndValue
                            data={data.morph.controlPedal.to}
                            upperCase={this.props.upperCase}
                            valueClass={this.props.valueClass}
                        />
                    </td>
                </tr>
            </>
        );
    }
}
