import React, { Component } from "react";
import Ns3 from "./ns3/ns3";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import NordTree from "./nord-tree";
import Ns2 from "./ns2/ns2";

export default class NordDevice extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContent){
        const render = this.props.data.name !== nextProps.data.name;
        console.log("render device", render);
        return render;
    }

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

                            <Tab eventKey="panel" title="Panel" disabled={false}>
                                <Ns3 data={data}/>
                            </Tab>

                            <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                                <NordTree data={data} />
                            </Tab>
                        </Tabs>
                    </div>
                </>
            );
        } else if (data && data.ext === "ns2p") {
            result = (
                <>
                    <div className={this.props.production ? "mt-2" : "d-none"}>
                        <Ns2 data={data} />
                    </div>

                    <div className={this.props.production ? "d-none" : "mt-2"}>
                        <Tabs id="uncontrolled-tab-example" defaultActiveKey="panel">
                            <Tab eventKey="panel" title="Panel" disabled={false}>
                                <Ns2 data={data}/>
                            </Tab>

                            <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                                <NordTree data={data} />
                            </Tab>
                        </Tabs>
                    </div>
                </>
            );
        }
        return <React.Fragment>{result}</React.Fragment>;
    }
}
