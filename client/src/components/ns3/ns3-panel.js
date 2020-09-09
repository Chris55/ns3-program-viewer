import React, { Component } from "react";
import "./ns3.css";
import Ns3Piano from "./ns3-piano";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ns3Organ from "./ns3-organ";

export default class Ns3Panel extends Component {
    render() {
        const data = this.props.data;

        return (
            <div className="ns3-panel">
                <Row>
                    <Col  sm={1} className="outer">
                        <div className="">
                            <div className="inner">PANEL {this.props.name}</div>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <div className={data.enabled ? "nord-on" : "nord-off"}>


                                <div className="ns3-piano">
                                    <Ns3Piano data={data.piano} />
                                </div>

                                <div className="ns3-organ">
                                    <Ns3Organ data={data.organ} />
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
