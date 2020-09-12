import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3FxRotarySpeaker extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="col text-center">
                            <div className="font-weight-bold">ROTARY SPEAKER</div>

                            <div className="nord-option-on">
                                <small>DRIVE {fx.drive}</small>
                            </div>

                            <div className={fx.stopMode ? "nord-option-on" : "nord-option-off"}>
                                <small>Stop Mode</small>
                            </div>

                            <div className="nord-option-on">
                                <small>{fx.speed.label}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
