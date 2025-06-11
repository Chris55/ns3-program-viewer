import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import NordTree from "./nord-tree";
import Ns3 from "./ns3/ns3";
import Ns2 from "./ns2/ns2";
import Ns3y from "./ns3/ns3y/ns3y";
import Ns2s from "./ns2/ns2s/ns2s";

const NordGear = ({ data }) => {
    if (!data) {
        return <></>;
    }
    const { ext } = data;

    switch (ext) {
        case "ns3f":
        case "ns3l":
            return <Ns3 data={data} />;
        case "ns3y":
            return <Ns3y data={data} />;
        case "ns2p":
        case "ns2l":
            return <Ns2 data={data} />;
        case "ns2s":
            return <Ns2s data={data} />;
        default:
            return <></>;
    }
};

const NordList = ({ programs, production }) => {
    const listItems = programs.map((data) => (
        <li className="list-group-item" style={{ padding: "0" }} key={data.uuid}>
            <div className="mb-2">
                {production && <NordGear data={data} />}

                {!production && (
                    <Tabs id="uncontrolled-tab-example">
                        <Tab eventKey="panel" title="Panel" disabled={false}>
                            <NordGear data={data} />
                        </Tab>

                        <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                            <NordTree data={data} />
                        </Tab>
                    </Tabs>
                )}
            </div>
        </li>
    ));
    return <ul className="list-group list-group-flush">{listItems}</ul>;
};

export default class NordDevice extends Component {
    shouldComponentUpdate(nextProps, _nextState, _nextContent) {
        if (this.props.data.length !== nextProps.data.length) {
            return true;
        }
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].uuid !== nextProps.data[i].uuid) {
                return true;
            }
            // name is updated when Show all is selected
            if (this.props.data[i].name !== nextProps.data[i].name) {
                return true;
            }
        }
        return false;
    }

    render() {
        return <NordList programs={this.props.data} production={this.props.production} />;
    }
}
