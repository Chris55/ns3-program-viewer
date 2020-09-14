import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";

export default class Ns3SectionSynthAmpEnv extends Component {
    render() {
        const env = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="justify-content-center">
                        <div>
                            <strong>AMP Env</strong>
                        </div>

                        <table className="table-borderless">
                            <tbody>
                                <tr>
                                    <Ns3LabelAndValue label="Attack" data={env.attack} table={true} />
                                </tr>
                                <tr>
                                    <Ns3LabelAndValue label="Decay" data={env.decay} table={true} />
                                </tr>
                                <tr>
                                    <Ns3LabelAndValue label="Release" data={env.release} table={true} />
                                </tr>

                                <tr>
                                    <td colSpan="3">
                                        <Ns3LabelAndValue
                                            label="Velocity"
                                            data={env.velocity}
                                            enabled={env.velocity !== "Off"}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
