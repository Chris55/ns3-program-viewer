// import React, { Component } from "react";
// import "./ns3-panel-component-jqx.css";
// import JqxKnob from "./assets/jqwidgets-react-tsx/jqxknob";
//
// export default class Ns3PanelComponentJqx extends Component {
//     render() {
//         const marks = {
//             colorProgress: "#51ea10",
//             colorRemaining: "#cfd4d4",
//             majorInterval: 9,
//             majorSize: "10%",
//             //minorInterval: 8,
//             offset: "75%",
//             size: "15%",
//             thickness: 0,  // 8
//         };
//         const labels = {
//             formatFunction: (label) => {
//                 // if (label !== "0" && label !== "100" && label !== "-100") {
//                 //     return label;
//                 // }
//                 // return label === "0" ? "Off" : label === "-100" ? "Min" : "Max";
//                 return (label / 10).toFixed(0);
//             },
//             offset: "88%",
//             step: 16,
//             visible: true,
//             size: 10,
//             style: {
//                 fill: "red",
//                 fontSize: "30",
//             }
//         };
//         const progressBar = {
//             offset: "0%",
//             size: "70%",
//         };
//         const pointer = {
//             offset: "0%",
//             size: "66%",
//             style: { fill: "white", stroke: "transparent" },
//             thickness: "6%",
//             type: "line",
//         };
//         const spinner = {
//             innerRadius: "65%",
//             marks: {
//                 colorProgress: "#fff",
//                 colorRemaining: "#fff",
//                 majorInterval: 16,
//                 majorSize: "5%",
//                 //minorInterval: 16,
//                 offset: "66%",
//                 size: "7%",
//                 thickness: 4,
//                 type: "circle",
//             },
//             outerRadius: "70%",
//             style: { fill: "transparent", stroke: "transparent" },
//         };
//         const dial = {
//             innerRadius: "0%",
//             outerRadius: "65%",
//             style: { fill: "#1d2634", stroke: "transparent" },
//         };
//         this.state = {
//             dial,
//             labels,
//             marks,
//             pointer,
//             progressBar,
//             spinner,
//         };
//
//         this.state = {
//             dial,
//             labels,
//             marks,
//             pointer,
//             progressBar,
//             spinner,
//         };
//
//         return (
//             <JqxKnob
//                 width={"90px"}
//                 height={"90px"}
//                 value={5}
//                 min={0}
//                 max={127}
//                 startAngle={120}
//                 endAngle={480}
//                 step={1}
//                 dragStartAngle={120}
//                 dragEndAngle={420}
//                 snapToStep={true}
//                 rotation={"clockwise"}
//                 marks={this.state.marks}
//                 labels={this.state.labels}
//                 progressBar={this.state.progressBar}
//                 pointer={this.state.pointer}
//                 spinner={this.state.spinner}
//                 dial={this.state.dial}
//             />
//         );
//     }
// }
