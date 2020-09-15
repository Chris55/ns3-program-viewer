import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Ns3LabelAndValue from "./lib/ns3-label-and-value";
import Ns3ValueOnOff from "./lib/ns3-value-on-off";


export default class Ns3SectionSynthModEnv extends Component {
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
                                    <Ns3LabelAndValue label="Attack" data={env.attack} table={true} upperCase={false}/>
                                </tr>
                                <tr>
                                    <Ns3LabelAndValue label="Decay" data={env.decay} table={true} upperCase={false}/>
                                </tr>
                                <tr>
                                    <Ns3LabelAndValue label="Release" data={env.release} table={true} upperCase={false}/>
                                </tr>

                                <tr>
                                    <td colSpan="3">
                                        <Ns3ValueOnOff label="Velocity" data={env.velocity}/>
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
