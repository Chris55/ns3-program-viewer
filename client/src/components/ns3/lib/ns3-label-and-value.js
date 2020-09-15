import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";

export default class Ns3LabelAndValue extends Component {
    render() {
        const labelClassName =
            this.props.enabled === undefined
                ? "nord-label nord-on"
                : this.props.enabled === true
                ? "nord-label nord-on"
                : "nord-label nord-off";

        const valueClassName =
            this.props.enabled === undefined
                ? "nord-value nord-on"
                : this.props.enabled === true
                ? "nord-value nord-on"
                : "nord-value nord-off";

        const upperCase = this.props.upperCase === false ? "nord-no-upper-case" : "nord-upper-case";

        const label = this.props.label === undefined ? "" : this.props.label + " ";
        let result;
        if (this.props.table === true) {
            result = (
                <>
                    <td className={labelClassName}>
                        <span className={labelClassName}>{this.props.label}</span>
                    </td>

                    <td />

                    <td className={upperCase + " " + valueClassName}>
                        <span>{this.props.data.value}</span>
                    </td>
                </>
            );
        } else {
            result = (
                <>
                    <span className={labelClassName}>{label}</span>
                    <span className={upperCase + " " + valueClassName}>{this.props.data.value}</span>
                </>
            );
        }
        return <React.Fragment>{result}</React.Fragment>;
    }
}
