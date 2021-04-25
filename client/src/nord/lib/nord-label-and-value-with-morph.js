import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import NordLabel from "./nord-label";
import NordLabelAndValue from "./nord-label-and-value";

export default class NordLabelAndValueWithMorph extends Component {
    render() {
        const data = this.props.data;
        const morphing =
            data.morph &&
            (data.morph.wheel.enabled || data.morph.afterTouch.enabled || data.morph.controlPedal.enabled);

        const enabled = this.props.enabled === undefined ? "" : this.props.enabled === true ? "nord-on" : "nord-off";
        return (
            <>
                <tr className={enabled}>
                    <td className="nord-label" title={this.props.title}>
                        <NordLabel label={this.props.label} />
                    </td>

                    <td className="nord-label text-right">
                        <span className={morphing ? "dot dot-morph" : "d-none"} />
                    </td>

                    <td className="nord-value">
                        <NordLabelAndValue
                            data={data}
                            valueClass={this.props.valueClass}
                            upperCase={this.props.upperCase}
                        />
                    </td>
                </tr>

                <tr className={data.morph.wheel.enabled ? enabled : "d-none"}>
                    <td colSpan="2" className="text-right nord-morph-space">
                        <span className="nord-morph">Wheel</span>
                    </td>
                    <td>
                        <NordLabelAndValue
                            data={data.morph.wheel.to}
                            upperCase={this.props.upperCase}
                            valueClass={this.props.valueClass}
                        />
                    </td>
                </tr>

                <tr className={data.morph.afterTouch.enabled ? enabled : "d-none"}>
                    <td colSpan="2" className="text-right nord-morph-space">
                        <span className="nord-morph">A-Touch</span>
                    </td>
                    <td className="nord-morph-space">
                        <NordLabelAndValue
                            data={data.morph.afterTouch.to}
                            upperCase={this.props.upperCase}
                            valueClass={this.props.valueClass}
                        />
                    </td>
                </tr>

                <tr className={data.morph.controlPedal.enabled ? enabled : "d-none"}>
                    <td colSpan="2" className="text-right">
                        <span className="nord-morph">CtrlPed</span>
                    </td>
                    <td>
                        <NordLabelAndValue
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
