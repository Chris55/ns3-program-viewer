import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3TableValue from "./lib/ns3-label-and-value-with-morph";

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
                                    <Ns3TableValue label="ATTACK" data={env.attack}/>
                                </tr>
                                <tr>
                                    <Ns3TableValue label="DECAY" data={env.decay}/>
                                </tr>
                                <tr>
                                    <Ns3TableValue label="RELEASE" data={env.release}/>
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
