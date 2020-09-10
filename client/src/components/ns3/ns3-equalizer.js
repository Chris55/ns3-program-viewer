import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3Equalizer extends Component {
    render() {
        const equalizer = this.props.data;
        const visible = equalizer?.enabled && equalizer?.source === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="col align-self-center">
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
