import React, { Component } from "react";

export default class Ns3SectionSynthPreset extends Component {
    render() {
        const ns3y = this.props.ns3y;
        const preset = this.props.preset;
        const oscillators = this.props.oscillators;
        const hidden =
            !preset.userPreset &&
            oscillators.type.value === "Sample" &&
            oscillators.waveForm1.location !== preset.samplePresetLocationValue;

        if (hidden) return;

        return (
            <React.Fragment>
                {!ns3y && preset.userPreset && preset.presetName && (
                    <div className="nord-font-small" style={{ marginLeft: "5px" }}>
                        {preset.userPresetLocationName} {preset.presetName}
                    </div>
                )}
                {!ns3y && !preset.userPreset && preset.presetName && (
                    <div className="nord-font-small" style={{ marginLeft: "5px" }}>
                        <span
                            style={{
                                color: "#3b4047",
                                background: "#f6faf7",
                                padding: "0 0.2rem",
                                marginRight: "0.4rem",
                            }}
                        >
                            {preset.samplePresetLocationName}
                        </span>
                        {preset.presetName}
                    </div>
                )}
            </React.Fragment>
        );
    }
}
