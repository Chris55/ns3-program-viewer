import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class NordLabelAndValue extends Component {
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

        const customValueClassName = this.props.valueClass || "";

        const upperCase = this.props.upperCase === false ? "nord-no-upper-case" : "nord-upper-case";

        const label = this.props.label === undefined ? "" : this.props.label + " ";

        if (this.props.table === true) {
            return (
                <>
                    <td className={labelClassName} title={this.props.title}>
                        {this.props.label}
                    </td>

                    <td />

                    <td className={upperCase + " " + valueClassName + " " + customValueClassName}>
                       {this.props.data.value}
                    </td>
                </>
            );
        }

        return (
            <>
                <span className={labelClassName}>{label}</span>
                <span className={upperCase + " " + valueClassName + " " + customValueClassName}>
                    {this.props.data.value}
                </span>
            </>
        );
    }
}
