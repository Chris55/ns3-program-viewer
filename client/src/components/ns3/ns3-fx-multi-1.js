import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3FxMulti1 extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : "d-none"}>
                <div className={this.props.className}>
                    <div className="col text-center">
                        <div className="font-weight-bold">EFFECT 1</div>

                        <div className="nord-option-on">
                            <small>TYPE {fx.type}</small>
                        </div>

                        <div className={fx.masterClock ? "nord-option-on" : "nord-option-off"}>
                            <small>MST CLK</small>
                        </div>

                        <div className="nord-option-on">
                            <small>RATE {fx.rate.label}</small>
                        </div>

                        <div className="nord-option-on">
                            <small>AMOUNT {fx.amount.label}</small>
                        </div>


                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
