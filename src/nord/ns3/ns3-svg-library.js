import React from "react";

const symbols = new Map([
    ["Sine", "M-7,-6 Q4,-21 14,-6 Q24,9 35,-6"],
    ["Triangle", "M4,0 L15,-15 L26,0"],
    ["Saw", "M4,0 L4,-15 L26,0"],
    ["Square", "M0,0 L0,-15 L20,-15 L20,0 L40,0"],
    ["Pulse 33", "M0,0 L0,-15 L12,-15 L12,0 L40,0"],
    ["Pulse 10", "M0,0 L0,-15 L7,-15 L7,0 L40,0"],
    ["ESaw", "M0,0 L0,-16 L10,-8 L20,-8 L30,0 L30,-16"],
    ["ESquare", "M-5,0 L-5,-15 Q5,-4 15,-15 L15,0 Q25,-11 35,0 L35,-15"],
    ["Bell", "M13,2 L17,2 M6,0 L24,0 M10,-9 Q15,-18 20,-9 L22,0 M8,0 L10,-9.5 M15,-14 L15,-16 "],
    [
        "Noise1",
        "M-2,-2 L-1,-15 L1,4 L3,-12 L5,5 L7,-14, L9,2 L11,-15 L13,5 L15,-12 L17,2 L19,-15, L21,5 L23,-10 L25,3 L27,-14,L29,5 L31,-15 L32,-2",
    ],
    [
        "Noise2",
        "M-2,-5 L-1,-6 L1,-4 L2,-10 L4,0 L6,-14, L8,2 L10,-15 L11,5 L13,-12 L15,2 L17,-15, L18,4 L20,-14, L22,5 L24,-13, L26,3 L27,-10 L29,-2 L31,-8 L33,-4 L35,-6 L37,-5",
    ],
]);

const linearConverter = function (value, minFrom, maxFrom, minTo, maxTo) {
    const rangeFrom = maxFrom - minFrom;
    const rangeTo = maxTo - minTo;
    return ((value - minFrom) * rangeTo) / rangeFrom + minTo;
};

const getKnobPosition = (x, y, radius, engValue, engMin, engMax) => {
    const deg = linearConverter(engValue, engMin, engMax, 145, 395);
    const rad = (deg * Math.PI) / 180;
    const x1 = x;
    const y1 = y;
    const x2 = x1 + radius * Math.cos(rad);
    const y2 = y1 + radius * Math.sin(rad);
    return {
        x1,
        y1,
        x2,
        y2,
        r: radius,
    };
};

export function Ns3WaveForm({ waveForm, x, y, style }) {
    const translate = `translate(${x} ${y})`;
    const points = symbols.get(waveForm);

    return (
        <>
            <g transform={translate}>
                <path d={points} style={style} />}
            </g>
        </>
    );
}

export function Ns3ArrowLeft({ x, y, style }) {
    const translate = `translate(${x} ${y})`;

    return (
        <>
            <g transform={translate}>
                <polyline points="15,0 5,0 5,-5 0,0 5,5 5,0" style={style} />
            </g>
        </>
    );
}

export function Ns3ArrowRight({ x, y, style }) {
    const translate = `translate(${x} ${y})`;

    return (
        <>
            <g transform={translate}>
                <polyline points="0,0 10,0 10,-6 15,0 10,6 10,0" style={style} />
            </g>
        </>
    );
}

export function Ns3Knob({ x, y, radius, value, min, max, style }) {
    const knob = getKnobPosition(x, y, radius, value, min, max);

    return (
        <>
            <circle cx={knob.x1} cy={knob.y1} r={knob.r} style={style} />

            <line x1={knob.x1} y1={knob.y1} x2={knob.x2} y2={knob.y2} style={style} />
        </>
    );
}
