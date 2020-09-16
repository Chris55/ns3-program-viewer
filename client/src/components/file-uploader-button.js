import React from 'react';
import Button from "react-bootstrap/Button";

const FileUploaderButton = props => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        //console.log("selected file:", fileUploaded);
        props.handleFile(fileUploaded);
    };
    return (
        <>
            <Button
                onClick={handleClick}>
                {props.title}
            </Button>
            <input type="file"
                   accept={props.accept}
                   ref={hiddenFileInput}
                   onChange={handleChange}
                   style={{display:'none'}}
            />
        </>
    );
};
export default FileUploaderButton;
