import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3SectionSynthModEnv extends Component {
    render() {
        const env = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="justify-content-center">
                        <div>
                            <strong>Mod Env</strong>
                        </div>
                        <table className="table-borderless nord-option-on-no-uppercase">
                            <tbody>
                                <tr>
                                    <td>
                                        <small>ATTACK </small>
                                    </td>
                                    <td>
                                        <strong>{env.attack.label}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small>DECAY </small>
                                    </td>
                                    <td>
                                        <strong>{env.decay.label}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small>RELEASE </small>
                                    </td>
                                    <td>
                                        <strong>{env.release.label}</strong>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <small className={env.velocity ? "nord-on" : "nord-off"}>VELOCITY</small>
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
