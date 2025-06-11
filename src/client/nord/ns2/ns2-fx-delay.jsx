import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordValueOnOff from "../lib/nord-value-on-off";
import NordLabelAndValueWithMorph from "../lib/nord-label-and-value-with-morph";

export default class Ns2FxDelay extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source.value === this.props.source;
        const tempoLabel = fx.tempo.lsw === 0 ? "Tempo" : "Tap Tempo";
        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">DELAY</div>

                            <table className="table-borderless">
                                <tbody>
                                    <tr>
                                        <NordValueOnOff label="Mst Clk" data={fx.masterClock} table={true} />
                                    </tr>
                                    <NordLabelAndValueWithMorph
                                        label={tempoLabel}
                                        data={fx.tempo}
                                        valueClass="nord-delay-tempo"
                                        upperCase={false}
                                    />
                                    <NordLabelAndValueWithMorph label="Amount" data={fx.amount} />
                                    <tr>
                                        <NordValueOnOff label="Ping Pong" data={fx.pingPong} table={true} />
                                    </tr>
                                    <tr>
                                        <NordLabelAndValue label="Feedback" data={fx.feedback} table={true} />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
