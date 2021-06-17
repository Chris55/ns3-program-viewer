import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class NordValueOnOff extends Component {
    render() {

        let className = this.props.data.enabled? "nord-value nord-on" : "nord-value nord-off"

        const upperCase = this.props.upperCase === false ? "nord-no-upper-case" : "nord-upper-case";

        if (this.props.data.isDefault !== undefined ) {
             className += this.props.data.isDefault ? " nord-default-value" : " nord-non-default-value";
        }

        if (this.props.table === true) {
            return (
                <>
                    <td colSpan="3" className={className + " " + upperCase}>
                        <span>{this.props.label}</span>
                    </td>
                </>
            );
        }

        return (
            <>
                <span className={className + " " + upperCase}>{this.props.label}</span>
            </>
        );
    }
}
