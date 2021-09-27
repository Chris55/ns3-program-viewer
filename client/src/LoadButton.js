import React from "react";
import FileUploaderButton from "./utils/file-uploader-button";
import {useDispatch, useSelector} from "react-redux";
import {allSupportedTypes, loadFiles, nordSelector} from "./features/nord/nordSliceReducer";

const LoadButton = (props) => {
    const dispatch = useDispatch();
    const {loading} = useSelector(nordSelector);

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
                disabled={loading}
                accept={allSupportedTypes}
                multiple={true}
                handleFiles={handleFiles}
            />
        </>
    );
};

export default LoadButton;
