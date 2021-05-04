import React from "react";
import "./App.css";
import FileUploaderButton from "./utils/file-uploader-button";

function LoadButton(props) {
    return (
        <>
            <FileUploaderButton
                className=""
                title={props.loading ? "Loading..." : "Load"}
                disabled={props.loading}
                accept=".ns3f,.ns3y,.ns2p"
                multiple={true}
                handleFile={props.handleFile}
            />
        </>
    );
}

export default LoadButton;
