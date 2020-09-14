import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";
import Ns3Label from "./ns3-label";

export default class Ns3LabelAndValue extends Component {
    render() {
        const className =
            this.props.enabled === undefined
                ? "nord-label-name nord-on"
                : this.props.enabled === true
                ? "nord-label-name nord-on"
                : "nord-label-name nord-off";

        const label = this.props.label === undefined ? "" : this.props.label + " ";
        let result;
        if (this.props.table === true) {
            result = (
                <>
                    <td className="align-top">
                        <Ns3Label label={this.props.label} />
                    </td>

                    <td />

                    <td className="align-top">
                        <Ns3LabelAndValue data={this.props.data} />
                    </td>
                </>
            );
        } else {
            result = (
                <span className={className}>
                    {label}
                    {this.props.data.value}
                </span>
            );
        }
        return <React.Fragment>{result}</React.Fragment>;
    }
}
