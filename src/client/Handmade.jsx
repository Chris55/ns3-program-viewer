import React from "react";
import { openUrl } from "./utils/handy";
import { nufUrl } from "./constants";

const Handmade = () => {
    return (
        <div className="handmade">
            Handmade by{" "}
            <a
                onClick={() => {
                    return openUrl(nufUrl);
                }}
            >
                Nord User Forum
            </a>{" "}
            members - v{import.meta.env.VITE_REACT_APP_VERSION}
        </div>
    );
};

export default Handmade;
