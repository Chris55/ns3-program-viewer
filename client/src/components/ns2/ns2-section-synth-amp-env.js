import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns2.css";
import NordLabelAndValue from "./lib/nord-label-and-value";

export default class Ns2SectionSynthAmpEnv extends Component {
    render() {
        const env = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="justify-content-center">
                        <div className="nord-option-title">AMP ENV</div>

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
                                    <NordLabelAndValue
                                        label="Velocity"
                                        data={env.velocity}
                                        enabled={env.velocity.value !== "Off"}
                                        table={true}
                                    />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
