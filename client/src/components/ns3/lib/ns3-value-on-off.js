import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";

export default class Ns3ValueOnOff extends Component {
    render() {

        const className = this.props.data.enabled? "nord-value nord-on" : "nord-value nord-off"

        const upperCase = this.props.upperCase === false ? "nord-no-upper-case" : "nord-upper-case";

        return (
            <>
                <span className={className + " " + upperCase}>{this.props.label}</span>
            </>
        );
    }
}
