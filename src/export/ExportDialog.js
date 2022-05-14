import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { nordSelector, setExportOptions } from "../features/nord/nordSliceReducer";

export const ExportDialog = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const { exportRange } = useSelector(nordSelector);

    const handleRange = (event) => {
        dispatch(setExportOptions({ range: event.target.value }));
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Export Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Check
                            label="Export only Selected File(s)"
                            value="selection"
                            type="radio"
                            onChange={handleRange}
                            checked={exportRange === "selection"}
                        />
                        <Form.Check
                            label="Export All Files"
                            value="all"
                            type="radio"
                            onChange={handleRange}
                            checked={exportRange === "all"}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleClose(true)}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
