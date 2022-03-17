import React from "react";

const Handmade = () => {
    return (
        <>
            <div className="handmade">
                Handmade by{" "}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.norduserforum.com/nord-stage-3-programs-ns3p-ns3pb-files-f32/ns3-program-viewer-t19939.html"
                >
                    Nord User Forum
                </a>{" "}
                members - v{process.env.REACT_APP_VERSION}
            </div>
        </>
    );
};

export default Handmade;
