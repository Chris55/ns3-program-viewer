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

        return (
            <React.Fragment>
                <div className={visible ? "d-flex nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="text-left">
                            <div className="nord-option-title">DELAY</div>

                            <table className="table-borderless">
                                <tbody>
                                    <Ns3LabelAndValueWithMorph label="Tempo" data={fx.tempo} upperCase={false} />
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Mst Clk" data={fx.masterClock} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Ping Pong" data={fx.pingPong} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Ns3Label label="Filter" />
                                        </td>
                                        <td />
                                        <td>
                                            <Ns3LabelAndValue data={fx.filter} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <Ns3ValueOnOff label="Analog Mode" data={fx.analogMode} />
                                        </td>
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
