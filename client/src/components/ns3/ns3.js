import React, { Component } from "react";
import "./ns3.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ns3Panel from "./ns3-panel";

function pad(pad, str, padLeft) {
    if (typeof str === "undefined") return pad;
    if (padLeft) {
        return (pad + str).slice(-pad.length);
    } else {
        return (str + pad).substring(0, pad.length);
    }
}

export default class Ns3 extends Component {
    render() {
        const data = this.props.data;
        const splitWidth =
            pad("   ", data.split.low.width, true) +
            "  " +
            pad("   ", data.split.mid.width, true) +
            "  " +
            pad("   ", data.split.high.width, true);
        const splitNote =
            pad("   ", data.split.low.note, true) +
            "  " +
            pad("   ", data.split.mid.note, true) +
            "  " +
            pad("   ", data.split.high.note, true);

        return (
            <React.Fragment className="ns3">
                <Row className="ns3-header">
                    <Col >
                        <div className="ns3-header-name">Program: {data.name}</div>
                    </Col>
                    <Col  className={data.name !== "None" ? "nord-option-on" : "nord-option-off"}>
                        <small>Master Clock Rate</small>
                        <br />
                        <small>{data.masterClock.rate}</small>
                    </Col>
                    <Col>
                        <Row>
                            <Col  className={data.split.enabled ? "nord-option-on text-right" : "nord-option-off"}>
                                <small>SPLIT </small>
                            </Col>
                            <Col className={data.split.enabled ? "nord-split" : "d-none"}>
                                <small>{splitWidth}</small>
                                <br />
                                <small>{splitNote}</small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={data.panelA.enabled ? "nord-on" : "nord-off"}>
                            <Ns3Panel name={"A"} data={data.panelA} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={data.panelB.enabled ? "nord-on" : "nord-off"}>
                            <Ns3Panel name={"B"} data={data.panelB} />
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
