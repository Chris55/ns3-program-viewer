import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
`;

const FileUploaderButton = props => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
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
                className="btn btn-secondary"
                onClick={handleClick}>
                {props.title}
            </Button>
            <input type="file"
                   ref={hiddenFileInput}
                   onChange={handleChange}
                   style={{display:'none'}}
            />
        </>
    );
};
export default FileUploaderButton;
