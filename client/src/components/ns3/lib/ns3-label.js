import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";

export default class Ns3Label extends Component {
    render() {
        const className =
            this.props.enabled === undefined
                ? "nord-label nord-on"
                : this.props.enabled === true
                ? "nord-label nord-on"
                : "nord-label nord-off";

        return (
            <>
                <span className={className}>{this.props.label}</span>
            </>
        );
    }
}
