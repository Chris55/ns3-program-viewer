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
                <tr>
                    <td className="align-top">
                        <Ns3Label label={this.props.label} />
                    </td>

                    <td className="align-top text-right">
                        <span className={morphing ? "dot dot-morph" : "d-none"} />
                        {/*<i><small>from</small></i>*/}
                    </td>

                    <td className="align-top">
                        <Ns3LabelAndValue data={data} upperCase={this.props.upperCase}/>
                    </td>
                </tr>

                <tr className={data.morph.wheel.enabled ? "" : "d-none"} style={{ lineHeight: 0.9 }}>
                    <td colSpan="2" className="text-right">
                        <span className="nord-morph">Wheel</span>
                        {/*<i><small>(Wheel) to</small></i>*/}
                    </td>
                    <td>
                        <Ns3LabelAndValue data={data.morph.wheel.to} upperCase={this.props.upperCase}/>
                    </td>
                </tr>

                <tr className={data.morph.afterTouch.enabled ? "" : "d-none"} style={{ lineHeight: 0.9 }}>
                    <td colSpan="2" className="text-right">
                        <span className="nord-morph">A-Touch</span>
                        {/*<i><small className="nord-morph">(A-Touch) to</small></i>*/}
                    </td>
                    <td>
                        <Ns3LabelAndValue data={data.morph.afterTouch.to} upperCase={this.props.upperCase}/>
                    </td>
                </tr>

                <tr className={data.morph.controlPedal.enabled ? "" : "d-none"} style={{ lineHeight: 0.9 }}>
                    <td colSpan="2" className="text-right">
                        <span className="nord-morph">CtrlPed</span>
                        {/*<i><small>(Ctrl Ped) to</small></i>*/}
                    </td>
                    <td>
                        <Ns3LabelAndValue data={data.morph.controlPedal.to} upperCase={this.props.upperCase}/>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}
