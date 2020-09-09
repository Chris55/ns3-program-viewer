import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ns3.css";
import Ns3VolumeAndMore from "./ns3-volume-and-more";

export default class Ns3Organ extends Component {
    render() {
        const organ = this.props.data;

        return (
            <React.Fragment>
                <Row className={organ.enabled ? "nord-on" : "nord-off"}>

                    <Ns3VolumeAndMore name={"ORGAN"} data={organ} />

                    <Col sm={8} className="align-self-lg-auto">
                        <div className="nord-name">
                            {organ.type} {organ.preset1.label} / {organ.preset2.label}{" "}
                        </div>

                        <div>

                            <div>
                                <span className={organ.vibrato.enabled ? "nord-option-on" : "nord-option-off"}>
                                    <small>Vibrato</small>
                                </span>

                                <span className={organ.vibrato.enabled  ? "nord-option-on" : "nord-option-off"}>
                                    <small>Type {organ.vibrato.mode}</small>
                                </span>
                            </div>

                            <div>
                                <span className={organ.percussion.enabled ? "nord-option-on" : "nord-option-off"}>
                                    <small>Percussion</small>
                                </span>

                                <span>  </span>

                                <span className={organ.percussion.volumeSoft ? "nord-option-on" : "nord-option-off"}>
                                    <small>Volume Soft {organ.percussion.volumeSoft}</small>
                                </span>

                                <span> </span>

                                <span className={organ.percussion.decayFast ? "nord-option-on" : "nord-option-off"}>
                                    <small>Decay Fast {organ.percussion.decayFast}</small>
                                </span>

                                <span> </span>

                                <span className={organ.percussion.harmonicThird ? "nord-option-on" : "nord-option-off"}>
                                    <small>Harmonic Third {organ.percussion.harmonicThird}</small>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col className=""></Col>
                </Row>
            </React.Fragment>
        );
    }
}
