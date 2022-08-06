import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import { useSelector } from "react-redux";
import { nordSelector } from "../../features/nord/nord-slice-reducer";

/***
 * returns Label & Value
 *
 * @param enabled
 * @param label
 * @param title
 * @param data
 * @param upperCase
 * @param valueClass
 * @param table
 * @param isDefault
 * @returns {JSX.Element}
 * @constructor
 */
const NordLabelAndValue = ({ enabled, label, title, data, upperCase, valueClass, table, isDefault }) => {
    // console waring during PDF rendering
    // Warning: useLayoutEffect does nothing on the server,
    // because its effect cannot be encoded into the server renderer's output format
    const { showDefault } = useSelector(nordSelector);

    let labelClassName = enabled === undefined || enabled === true ? "nord-label nord-on" : "nord-label nord-off";
    let valueClassName = enabled === undefined || enabled === true ? "nord-value nord-on" : "nord-value nord-off";
    const isDefault1 = data.isDefault !== undefined ? data.isDefault : isDefault;

    if (showDefault && isDefault1 !== undefined) {
        valueClassName += isDefault1 ? " nord-default-value" : " nord-non-default-value";
    }

    const customValueClassName = valueClass || "";

    const upperCase1 = upperCase === false ? "nord-no-upper-case" : "nord-upper-case";

    const label1 = label === undefined ? "" : label + " ";

    const infoClassName = data.comment ? "nord-tooltip" : "";
    const info = data.comment ? (
        <span>
            {"*"}
            <span className="nord-tooltip-text">{data.comment}</span>
        </span>
    ) : (
        <></>
    );

    if (table === true) {
        return (
            <>
                <td className={labelClassName} title={title}>
                    {label1}
                </td>

                <td />

                <td className={`${upperCase1} ${valueClassName} ${customValueClassName} ${infoClassName}`}>
                    {data.value}
                    {info}
                </td>
            </>
        );
    }

    return (
        <>
            <span className={labelClassName} title={data.comment}>
                {label1}
            </span>
            <span className={`${upperCase1} ${valueClassName} ${customValueClassName} ${infoClassName}`}>
                {data.value}
                {info}
            </span>
        </>
    );
};

export default NordLabelAndValue;
