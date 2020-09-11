import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3FxSimAmpEq extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx?.enabled && fx?.source === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="col text-center">
                            <h6 className="font-weight-bold">AMP SIM/EQ</h6>

                            {/*<div className={delay.masterClock ? "nord-option-on" : "nord-option-off"}>*/}
                            {/*    <small>MST CLK</small>*/}
                            {/*</div>*/}

                            {/*<div className="nord-option-on">*/}
                            {/*    <small>RATE {delay.rate.label}</small>*/}
                            {/*</div>*/}

                            {/*<div className="nord-option-on">*/}
                            {/*    <small>AMOUNT {delay.amount.label}</small>*/}
                            {/*</div>*/}

                            {/*<div className="nord-option-on">*/}
                            {/*    {delay.type}*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
