import React, { Component } from "react";
import Ns3 from "./ns3/ns3";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import NordTree from "./nord-tree";
import Ns2 from "./ns2/ns2";

class NordList extends Component {
    render() {
        const listItems = this.props.data.map((data) => {
            let result;
            if (data && data.ext === "ns3f") {
                result = (
                    <div className="mt-2">
                        {this.props.production && <Ns3 data={data} />}

                        {!this.props.production && (
                            <Tabs id="uncontrolled-tab-example">
                                <Tab eventKey="panel" title="Panel" disabled={false}>
                                    <Ns3 data={data} />
                                </Tab>

                                <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                                    <NordTree data={data} />
                                </Tab>
                            </Tabs>
                        )}
                    </div>
                );
            } else if (data && data.ext === "ns2p") {
                result = (
                    <div className="mt-2">
                        {this.props.production && <Ns2 data={data} />}

                        {!this.props.production && (
                            <Tabs id="uncontrolled-tab-example">
                                <Tab eventKey="panel" title="Panel" disabled={false}>
                                    <Ns2 data={data} />
                                </Tab>

                                <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                                    <NordTree data={data} />
                                </Tab>
                            </Tabs>
                        )}
                    </div>
                );
            }
            return (
                <li className="list-group-item" key={data.name} style={{ padding: "0" }}>
                    {result}
                </li>
            );
        });
        return <ul className="list-group list-group-flush">{listItems}</ul>;
    }
}

export default class NordDevice extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContent) {
        if (this.props.data.length !== nextProps.data.length) {
            console.log("render device, size changed");
            return true;
        }
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].name !== nextProps.data[i].name) {
                console.log("render device", this.props.data[i].name, "->", nextProps.data[i].name);
                return true;
            }
        }
        console.log("no render device");
        return false;
    }

    render() {
        return <NordList data={this.props.data} production={this.props.production} />;
    }
}
