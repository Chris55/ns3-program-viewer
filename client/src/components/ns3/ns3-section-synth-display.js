import React from "react";
import { Ns3ArrowLeft, Ns3ArrowRight, Ns3Knob, Ns3WaveForm } from "./ns3-svg-library";

const color = "#f6faf7";
const background = "green"; // "#32322f";
const strokeWidth = 1.5;
const fontFamily = ""; // Helvetica, Arial";
const fontWeight = 400;
const fontSize = "0.95rem";

const textAlignMiddleStyle = {
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    fill: color,
    fontSize: fontSize,
    textAnchor: "middle",
};

const textAlignStartStyle = {
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    fill: color,
    fontSize: fontSize,
    textAnchor: "start",
};

const textAlignMiddleStyle2 = {
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    fill: color,
    fontSize: "0.95rem",
    textAnchor: "middle",
};

const lineStyle = { fill: "none", stroke: color, strokeWidth: strokeWidth };
const filledLineStyle = { fill: color, stroke: color, strokeWidth: strokeWidth };

const getFirstBox = (oscType, oscWaveForm) => {
    const modeTwoLines = oscType === "Sample";

    if (oscType === "Classic" || oscType === "Sample") {
        return (
            <>
                <rect x="5" y="15" width="70" height={modeTwoLines ? 50 : 70} style={lineStyle} />

                <text x="40" y="34" style={textAlignMiddleStyle}>
                    {oscType}
                </text>

                {!modeTwoLines && <Ns3WaveForm waveForm={oscWaveForm.value} x={24} y={59} style={lineStyle} />}

                {!modeTwoLines && (
                    <text x="40" y="78" style={textAlignMiddleStyle}>
                        {oscWaveForm.value}
                    </text>
                )}

                {modeTwoLines && (
                    <text x="40" y="55" style={textAlignMiddleStyle}>
                        {oscWaveForm.location + 1}
                    </text>
                )}

                {modeTwoLines && (
                    <text
                        x="5"
                        y="83"
                        style={{
                            fontWeight: 700,
                            fontFamily: fontFamily,
                            fill: color,
                            fontSize: fontSize,
                            textAnchor: "start",
                        }}
                    >
                        {oscWaveForm.name}
                    </text>
                )}

            </>
        );
    }

    const items = oscWaveForm.value.split(" ");
    return (
        <>
            <rect x="5" y="15" width="70" height="70" style={lineStyle} />

            {items.length >= 1 && (
                <text x="40" y="35" style={textAlignMiddleStyle}>
                    {items[0]}
                </text>
            )}

            {items.length >= 2 && (
                <text x="40" y="57" style={textAlignMiddleStyle}>
                    {items[1]}
                </text>
            )}

            {items.length >= 3 && (
                <text x="40" y="78" style={textAlignMiddleStyle}>
                    {items[2]}
                </text>
            )}
        </>
    );
};

const getSecondBlock = (oscType, oscWaveForm, oscConfig, oscControl, oscPitch) => {
    const modeTwoLines = oscType === "Sample";
    const modeTwoLinesOffset = modeTwoLines ? -17 : 0;

    const topLabelPosition = {
        x2: 120,
        y2: 26,
        x3: 200,
        y3: 35,
    };

    const bottomLabelPosition = {
        x2: 120,
        y2: 82 + modeTwoLinesOffset,
    };

    const knobPosition = {
        x: 120,
        y: 48 + modeTwoLinesOffset,
    };

    const knobRadius = 15;

    const leftArrowPosition = {
        x: 85,
        y: 48 + modeTwoLinesOffset,
    };

    const rightArrowPosition = {
        x: 141,
        y: 48 + modeTwoLinesOffset,
    };

    const definition = new Map([
        [
            "1 Pitch",
            {
                label: "Semi",
                leftSide: "left",
                rightSide: "value",
                wave2: null,
                right1: "",
                right2: "",
                right3: "",
            },
        ],
        [
            "2 Shape",
            {
                label: "Amt",
                leftSide: "left",
                rightSide: "value",
                wave2: null,
                right1: "",
                right2: "",
                right3: "",
            },
        ],
        [
            "3 Sync",
            {
                label: "Freq",
                leftSide: "left",
                rightSide: "line",
                wave2: null,
                right1: "Sync",
                right2: "Osc",
                right3: "",
            },
        ],
        [
            "4 Detune",
            {
                label: "Fine",
                leftSide: "empty",
                rightSide: "right",
                wave2: "same",
                right1: "",
                right2: "Detune",
                right3: "pitch",
            },
        ],
        [
            "5 MixSin",
            {
                label: "xFade",
                leftSide: "right",
                rightSide: "left",
                wave2: "Sine",
                right1: "",
                right2: "Sine",
                right3: "pitch",
            },
        ],
        [
            "6 MixTri",
            {
                label: "xFade",
                leftSide: "right",
                rightSide: "left",
                wave2: "Triangle",
                right1: "",
                right2: "Triangle",
                right3: "pitch",
            },
        ],
        [
            "7 MixSaw",
            {
                label: "xFade",
                leftSide: "right",
                rightSide: "left",
                wave2: "Saw",
                right1: "",
                right2: "Saw",
                right3: "pitch",
            },
        ],
        [
            "8 MixSqr",
            {
                label: "xFade",
                leftSide: "right",
                rightSide: "left",
                wave2: "Square",
                right1: "",
                right2: "Square",
                right3: "pitch",
            },
        ],
        [
            "9 MixBell",
            {
                label: "xFade",
                leftSide: "right",
                rightSide: "left",
                wave2: "Bell",
                right1: "",
                right2: "Bell",
                right3: "pitch",
            },
        ],
        [
            "10 MixNs1",
            {
                label: "xFade",
                leftSide: "right",
                rightSide: "left",
                wave2: "Noise1",
                right1: "",
                right2: "Noise 1",
                right3: "White",
            },
        ],
        [
            "11 MixNs2",
            {
                label: "xFade",
                leftSide: "right",
                rightSide: "left",
                wave2: "Noise2",
                right1: "",
                right2: "Noise 2",
                right3: "pitch",
            },
        ],
        [
            "12 FM1",
            {
                label: "Amt",
                leftSide: "left",
                rightSide: "line",
                wave2: null,
                right1: "FM",
                right2: "1",
                right3: "pitch",
            },
        ],
        [
            "13 FM2",
            {
                label: "Amt",
                leftSide: "left",
                rightSide: "line",
                wave2: null,
                right1: "FM",
                right2: "2",
                right3: "pitch",
            },
        ],
        [
            "14 RM",
            {
                label: "Amt",
                leftSide: "right",
                rightSide: "left",
                wave2: null,
                right1: "Ring",
                right2: "Mod",
                right3: "pitch",
            },
        ],
    ]);

    const details = definition.get(oscConfig.value) || {
        label: "",
        leftSide: "",
        rightSide: "",
        wave2: null,
        right1: "",
        right2: "",
        right3: "",
    };
    const wave2 = details.wave2 === "same" ? oscWaveForm.value : details.wave2;

    return (
        <>
            {!modeTwoLines && (
                <text x={topLabelPosition.x2} y={topLabelPosition.y2} style={textAlignMiddleStyle2}>
                    {details.label}
                </text>
            )}

            {details.leftSide === "left" && (
                <Ns3ArrowLeft x={leftArrowPosition.x} y={leftArrowPosition.y} style={filledLineStyle} />
            )}

            {details.leftSide === "right" && (
                <Ns3ArrowRight x={leftArrowPosition.x} y={leftArrowPosition.y} style={filledLineStyle} />
            )}

            {oscConfig.value !== "None" && (
                <Ns3Knob
                    x={knobPosition.x}
                    y={knobPosition.y}
                    radius={knobRadius}
                    style={lineStyle}
                    value={oscControl.midi}
                    min={0}
                    max={127}
                />
            )}

            {details.rightSide === "left" && (
                <Ns3ArrowLeft x={rightArrowPosition.x} y={rightArrowPosition.y} style={filledLineStyle} />
            )}

            {details.rightSide === "right" && (
                <Ns3ArrowRight x={rightArrowPosition.x} y={rightArrowPosition.y} style={filledLineStyle} />
            )}

            {details.rightSide === "line" && (
                <line
                    x1={rightArrowPosition.x - 5}
                    y1={rightArrowPosition.y}
                    x2={rightArrowPosition.x + 15}
                    y2={rightArrowPosition.y}
                    style={filledLineStyle}
                />
            )}

            {details.rightSide === "value" && (
                <text x={rightArrowPosition.x} y={rightArrowPosition.y + knobRadius / 3} style={textAlignStartStyle}>
                    {oscControl.value}
                </text>
            )}

            {oscConfig.value !== "None" && (
                <text x={bottomLabelPosition.x2} y={bottomLabelPosition.y2} style={textAlignMiddleStyle2}>
                    {oscConfig.value}
                </text>
            )}

            {(details.right1 || details.wave2) && (
                <rect x="165" y="15" width="70" height={modeTwoLines ? 50 : 70} style={lineStyle} />
            )}

            {wave2 && (
                <Ns3WaveForm
                    waveForm={wave2}
                    x={topLabelPosition.x3 - 15}
                    y={topLabelPosition.y3 + 1}
                    style={lineStyle}
                />
            )}

            {details.right1 && (
                <text x={topLabelPosition.x3} y={topLabelPosition.y3} style={textAlignMiddleStyle}>
                    {details.right1}
                </text>
            )}

            {!modeTwoLines && details.right2 && (
                <text x={topLabelPosition.x3} y={topLabelPosition.y3 + 20} style={textAlignMiddleStyle}>
                    {details.right2}
                </text>
            )}

            {details.right3 === "pitch" && (
                <text
                    x={topLabelPosition.x3}
                    y={topLabelPosition.y3 + 40 + modeTwoLinesOffset}
                    style={textAlignMiddleStyle}
                >
                    {oscPitch.value}
                </text>
            )}

            {details.right3 && details.right3 !== "pitch" && (
                <text
                    x={topLabelPosition.x3}
                    y={topLabelPosition.y3 + 40 + modeTwoLinesOffset}
                    style={textAlignMiddleStyle}
                >
                    {details.right3}
                </text>
            )}
        </>
    );
};

export const Ns3SectionSynthDisplay = ({ oscType, oscWaveForm, oscConfig, oscControl, oscPitch }) => {
    const firstBox = getFirstBox(oscType, oscWaveForm);
    const secondBlock = getSecondBlock(oscType, oscWaveForm, oscConfig, oscControl, oscPitch);

    return (
        <div
            style={
                {
                    //background: background,
                    // width: "240",
                    // height: "90",
                }
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 4 235 86"
                width="235"
                height="86"
                preserveAspectRatio="none"
            >
                <line x1="5" y1="7" x2="237" y2="7" style={lineStyle} />

                {firstBox}

                {oscWaveForm.useConfigAndPitch && secondBlock}
            </svg>
        </div>
    );
};
