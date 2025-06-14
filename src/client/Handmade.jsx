import React from "react";
import { openUrl } from "./utils/handy";
import { nufUrl } from "./constants";

const Handmade = () => {
    return (
        <div className="handmade">
            Handmade by <a onClick={() => openUrl(nufUrl)}>Nord User Forum</a> members - v
            {process.env.REACT_APP_VERSION}
        </div>
    );
};

export default Handmade;
