import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";
import { useSelector } from "react-redux";
import { nordSelector } from "../../features/nord/nordSliceReducer";

const NordValueOnOff = ({ label, data, upperCase, table }) => {
    // console waring during PDF rendering
    // Warning: useLayoutEffect does nothing on the server,
    // because its effect cannot be encoded into the server renderer's output format
    const { showDefault } = useSelector(nordSelector);

    let className = data.enabled ? "nord-value nord-on" : "nord-value nord-off";

    const upperCase1 = upperCase === false ? "nord-no-upper-case" : "nord-upper-case";

    if (showDefault && data.isDefault !== undefined) {
        className += data.isDefault ? " nord-default-value" : " nord-non-default-value";
    }

    if (table === true) {
        return (
            <>
                <td colSpan="3" className={className + " " + upperCase1}>
                    <span>{label}</span>
                </td>
            </>
        );
    }

    return (
        <>
            <span className={className + " " + upperCase1}>{label}</span>
        </>
    );
};

export default NordValueOnOff;
