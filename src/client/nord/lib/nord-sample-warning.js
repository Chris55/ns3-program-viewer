import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class NordSampleWarning extends Component {
    render() {
        const showSampleLocationWarning = this.props.showSampleLocationWarning;
        const showSampleNotFoundWarning = this.props.showSampleNotFoundWarning;

        let warningMessage = "";
        if (showSampleLocationWarning) {
            warningMessage = "Sample location stored in the program file may be different on the Nord Stage panel.";
        }
        if (showSampleNotFoundWarning) {
            warningMessage += " Sample Name is not stored in the program.";
        }

        return (
            <React.Fragment>
                {warningMessage && <div className="nordSampleWarning">{warningMessage}</div>}
            </React.Fragment>
        );
    }
}
