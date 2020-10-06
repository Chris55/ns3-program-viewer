import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3Label from "./lib/ns3-label";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";
import Ns3LabelAndValueWithMorph from "./lib/ns3-label-and-value-with-morph";

export default class Ns3FxDelay extends Component {
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
                                    <Ns3LabelAndValueWithMorph
                                        label={tempoLabel}
                                        data={fx.tempo}
                                        valueClass="nord-delay-tempo"
                                        upperCase={false}
                                    />
                                    <tr>
                                        <Ns3ValueOnOff label="Mst Clk" data={fx.masterClock} table={true} />
                                    </tr>
                                    <tr>
                                        <Ns3ValueOnOff label="Ping Pong" data={fx.pingPong} table={true} />
                                    </tr>
                                    <tr>
                                        <Ns3LabelAndValue label="Filter" data={fx.filter} table={true} />
                                    </tr>
                                    <tr>
                                        <Ns3ValueOnOff label="Analog Mode" data={fx.analogMode} table={true} />
                                    </tr>
                                    <Ns3LabelAndValueWithMorph label="Feedback" data={fx.feedback} />
                                    <Ns3LabelAndValueWithMorph label="Mix" data={fx.mix} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
