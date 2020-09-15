import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";

export default class Ns3ValueOnOff extends Component {
    render() {

        return (
            <React.Fragment>
                <span className={this.props.data.enabled? "nord-value nord-on" : "nord-value nord-off"}>{this.props.label}</span>
            </React.Fragment>
        );
    }
}
