import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3Fx1 extends Component {
    render() {
        const fx1 = this.props.data;
        const visible = fx1.enabled && fx1.source === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : "d-none"}>
                <div className={this.props.className}>
                    <div className="col align-self-center">
                        <h6 className="font-weight-bold">EFFECT 1</h6>

                        <div className={fx1.masterClock ? "nord-option-on" : "nord-option-off"}>
                            <small>MST CLK</small>
                        </div>

                        <div className="nord-option-on">
                            <small>RATE {fx1.rate.label}</small>
                        </div>

                        <div className="nord-option-on">
                            <small>AMOUNT {fx1.amount.label}</small>
                        </div>

                        <div className="nord-option-on">
                            {fx1.type}
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
