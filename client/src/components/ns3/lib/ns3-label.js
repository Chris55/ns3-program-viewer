import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";

export default class Ns3Label extends Component {
    render() {
        const className =
            this.props.enabled === undefined
                ? "nord-label-name nord-on"
                : this.props.enabled === true
                ? "nord-label-name nord-on"
                : "nord-label-name nord-off";

        return (
            <React.Fragment>
                <span className={className}>{this.props.label}</span>
            </React.Fragment>
        );
    }
}
