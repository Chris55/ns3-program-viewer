import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/ns3.css";
import NordLabelAndValue from "../lib/nord-label-and-value";
import NordValueOnOff from "../lib/nord-value-on-off";

export default class Ns2SectionSynthModEnv extends Component {
    render() {
        const env = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="justify-content-center">
                        <div className="nord-option-title">MOD ENV</div>

                        <table className="table-borderless">
                            <tbody>
                                <tr>
                                    <NordLabelAndValue label="Attack" data={env.attack} table={true} upperCase={false} />
                                </tr>
                                <tr>
                                    <NordLabelAndValue label="Decay" data={env.decay} table={true} upperCase={false} />
                                </tr>
                                <tr>
                                    <NordLabelAndValue
                                        label="Release"
                                        data={env.release}
                                        table={true}
                                        upperCase={false}
                                    />
                                </tr>

                                <tr>
                                    <NordValueOnOff label="Velocity" data={env.velocity} table={true} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
