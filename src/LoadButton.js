import React from "react";
import FileUploaderButton from "./utils/file-uploader-button";
import { useDispatch, useSelector } from "react-redux";
import { allSupportedTypes, loadFiles, nordSelector } from "./features/nord/nordSliceReducer";

const LoadButton = (props) => {
    const dispatch = useDispatch();
    const { loading, exporting } = useSelector(nordSelector);
    const disabled = loading || exporting;

    const handleFiles = (files) => {
        if (files) {
            dispatch(loadFiles(files));
        }
    };

    return (
        <>
            <FileUploaderButton
                className={props.className}
                variant={props.variant}
                size={props.size}
                title={loading ? "Loading..." : "Load"}
                disabled={disabled}
                accept={allSupportedTypes}
                multiple={true}
                handleFiles={handleFiles}
            />
        </>
    );
};

export default LoadButton;
