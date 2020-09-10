import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3Fx2 extends Component {
    render() {
        const fx2 = this.props.data;
        const visible = fx2.enabled && fx2.source === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="col align-self-center">
                            <h6 className="font-weight-bold">EFFECT 2</h6>

                            <div className="nord-option-on">
                                <small>RATE {fx2.rate.label}</small>
                            </div>

                            <div className="nord-option-on">
                                <small>AMOUNT {fx2.amount.label}</small>
                            </div>

                            <div className="nord-option-on">{fx2.type}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
