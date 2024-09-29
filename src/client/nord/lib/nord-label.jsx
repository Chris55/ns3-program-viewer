import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class NordLabel extends Component {
    render() {
        const className =
            this.props.enabled === undefined || this.props.enabled === true
                ? "nord-label nord-on"
                : "nord-label nord-off";

        if (this.props.table === true) {
            return (
                <td>
                    <span className={className}>{this.props.label}</span>
                </td>
            );
        } else {
            return (
                <>
                    <span className={className}>{this.props.label}</span>
                </>
            );
        }
    }
}
