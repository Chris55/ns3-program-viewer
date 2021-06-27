import React from "react";
import Button from "react-bootstrap/Button";

const FileUploaderButton = (props) => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
        document.activeElement.blur();
    };

    const handleChange = (event) => {
        event.preventDefault();
        if (event.target.files.length !== 0) {
            props.handleFiles(event.target.files);
        }
        // this is required to be able to reselect the same file...
        event.target.value = '';
    };

    return (
        <>
            <Button
                className={props.className}
                variant={props.variant}
                size={props.size}
                disabled={props.disabled}
                onClick={handleClick}
            >
                {props.title}
            </Button>
            <input
                type="file"
                accept={props.accept}
                ref={hiddenFileInput}
                multiple={props.multiple}
                onChange={handleChange}
                style={{ display: "none" }}
            />
        </>
    );
};

export default FileUploaderButton;
