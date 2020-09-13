import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";

export default class Ns3LabelAndValue extends Component {
    render() {
        const className =
            this.props.enabled === undefined
                ? "nord-label-name nord-on"
                : this.props.enabled === true
                ? "nord-label-name nord-on"
                : "nord-label-name nord-off";

        const label = this.props.label === undefined ? "" : this.props.label + " ";

        return (
            <React.Fragment>
                <span className={className}>
                    {label}{this.props.data.value}
                </span>
            </React.Fragment>
        );
    }
}
