import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3SectionSynthLfo extends Component {
    render() {
        const lfo = this.props.data;

        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <div className="justify-content-center">
                        <div>
                            <strong>LFO</strong>
                        </div>

                        <table className="table-borderless nord-option-on-no-uppercase">
                            <tbody>
                                <tr>
                                    <td>
                                        <small>RATE</small>
                                    </td>
                                    <td>
                                        <strong>{lfo.rate.label}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small>WAVE</small>
                                    </td>
                                    <td>
                                        <strong>{lfo.wave}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small className={lfo.masterClock ? "nord-on" : "nord-off"}>MST CLK</small>
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
