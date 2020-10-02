import React, { Component } from "react";
import Ns3 from "./ns3/ns3";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import JSONTree from "react-json-tree";

export default class NordDevice extends Component {
        render() {
            const data = this.props.data;

            let result;
            if (data && data.ext === "ns3f") {
                result = (
                    <>
                        <div className={this.props.production ? "mt-2" : "d-none"}>
                            <Ns3 data={data} />
                        </div>

                        <div className={this.props.production ? "d-none" : "mt-2"}>
                            <Tabs id="uncontrolled-tab-example">
                                {/*style={{backgroundColor: 'grey'}}*/}
                                <Tab eventKey="panel" title="Panel" disabled={false}>
                                    <Ns3 data={data} />
                                </Tab>

                                <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                                    <JSONTree
                                        data={data}
                                        hideRoot={true}
                                        getItemString={(type, data, itemType, itemString) => <span/>}
                                        shouldExpandNode={(keyPath, data, level) => true}
                                        theme={{
                                            scheme: "custom",
                                            author: "wimer hazenberg (http://www.monokai.nl)",
                                            base00: "#343a40",
                                            base01: "#383830",
                                            base02: "#49483e",
                                            base03: "#75715e",
                                            base04: "#a59f85",
                                            base05: "#f8f8f2",
                                            base06: "#f5f4f1",
                                            base07: "#f9f8f5",
                                            base08: "#f92672",
                                            base09: "#fd971f",
                                            base0A: "#f4bf75",
                                            base0B: "#a6e22e",
                                            base0C: "#a1efe4",
                                            base0D: "#66d9ef",
                                            base0E: "#ae81ff",
                                            base0F: "#cc6633",
                                        }}
                                        invertTheme={false}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                    </>
                );
            } else if (data && data.ext === "ns2p") {
                result = (
                    <>
                        <div className={this.props.production ? "d-none" : "mt-2"}>
                            <Tabs id="uncontrolled-tab-example" defaultActiveKey="debug">

                                <Tab eventKey="panel" title="Panel" disabled={true}>

                                </Tab>

                                <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                                    <JSONTree
                                        data={data}
                                        hideRoot={true}
                                        getItemString={(type, data, itemType, itemString) => <span/>}
                                        shouldExpandNode={(keyPath, data, level) => true}
                                        theme={{
                                            scheme: "custom",
                                            author: "wimer hazenberg (http://www.monokai.nl)",
                                            base00: "#343a40",
                                            base01: "#383830",
                                            base02: "#49483e",
                                            base03: "#75715e",
                                            base04: "#a59f85",
                                            base05: "#f8f8f2",
                                            base06: "#f5f4f1",
                                            base07: "#f9f8f5",
                                            base08: "#f92672",
                                            base09: "#fd971f",
                                            base0A: "#f4bf75",
                                            base0B: "#a6e22e",
                                            base0C: "#a1efe4",
                                            base0D: "#66d9ef",
                                            base0E: "#ae81ff",
                                            base0F: "#cc6633",
                                        }}
                                        invertTheme={false}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                    </>
                );
            }
            return <React.Fragment>{result}</React.Fragment>;
        }
    }
