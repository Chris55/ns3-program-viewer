import React from "react";
import Button from "react-bootstrap/Button";

const FileUploaderButton = (props) => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        event.preventDefault();
        props.handleFiles(event.target.files);
    };
    return (
        <>
            <Button variant={props.variant} size={props.size} disabled={props.disabled} onClick={handleClick}>
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
