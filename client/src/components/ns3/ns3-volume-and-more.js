import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import Col from "react-bootstrap/Col";

export default class Ns3VolumeAndMore extends Component {
    render() {
        const organ = this.props.data;

        return (
            <React.Fragment>
                <Col sm={3} className="text-center">
                    <h6 className="font-weight-bold">{this.props.name}</h6>

                    <h6>{organ.volume.label}</h6>

                    <div className="">
                        <span className={organ.kbZone.array[0] ? "dot dot-green " : "dot"} />
                        <span className={organ.kbZone.array[1] ? "dot dot-green " : "dot"} />
                        <span className={organ.kbZone.array[2] ? "dot dot-green " : "dot"} />
                        <span className={organ.kbZone.array[3] ? "dot dot-green " : "dot"} />
                    </div>

                    <div className="">
                        <small className={organ.octaveShift !== 0 ? "nord-option-on" : "nord-option-off"}>
                            {organ.octaveShift >= 0 ? "+" + organ.octaveShift : organ.octaveShift} oct
                        </small>
                    </div>

                    <div>
                        <span className={organ.pitchStick ? "nord-option-on" : "nord-option-off"}>
                            <small>PSTICK</small>
                        </span>

                        <span> </span>

                        <span className={`nord-option ${organ.sustainPedal ? "nord-option-on" : "nord-option-off"}`}>
                            <small>SUSTPED</small>
                        </span>
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}
