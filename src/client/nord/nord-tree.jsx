import React, { Component } from "react";
import { JSONTree } from "react-json-tree";

export default class NordTree extends Component {
    render() {
        const data = this.props.data;

        return (
            <JSONTree
                data={data}
                hideRoot={true}
                getItemString={(_type, _data, _itemType, _itemString) => <span />}
                shouldExpandNode={(_keyPath, _data, _level) => true}
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
        );
    }
}
