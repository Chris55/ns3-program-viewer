import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import NordDevice from "./nord/nord-device";
import Button from "react-bootstrap/Button";
import { buildExport } from "./export/export-pdf";
import Home from "./Home";
import LoadButton from "./LoadButton";
import { useDispatch, useSelector } from "react-redux";
import {
    nordSelector,
    setError,
    setExporting,
    setExportingDetail,
    toggleShowAll, toggleShowDefault,
} from "./features/nord/nordSliceReducer";
import { Form, Navbar } from "react-bootstrap";

const Main = () => {
    const dispatch = useDispatch();
    const { loading, loaded, data, showAll, showDefault, exporting, exportDetails, production } = useSelector(nordSelector);

    const handleToggleShow = () => {
        dispatch(toggleShowAll());
    };

    const handleToggleDefault = () => {
        dispatch(toggleShowDefault());
    };

    const handleExport = async () => {
        const callback = (name) => {
            dispatch(setExportingDetail(name));
        };
        dispatch(setExporting(true));
        await buildExport(data, showAll, callback).catch((e) => dispatch(setError(e.message)));
        dispatch(setExporting(false));
    };

    return (
        <>
            {!loaded && <Home />}

            {loaded && (
                <div>
                    <Navbar className="bg-light">
                        <Navbar.Collapse className="">
                            <Form inline className="ml-n2">
                                <LoadButton className="nav-link" variant="light" />
                                <Button
                                    className="nav-link"
                                    variant="light"
                                    disabled={exporting || loading}
                                    onClick={handleExport}
                                >
                                    {exporting ? "Exporting " + exportDetails : "Export"}
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Form inline >
                                <Form.Check
                                    className="mr-5"
                                    label="Smart"
                                    name="default"
                                    type="switch"
                                    id="id-default"
                                    disabled={false}
                                    checked={showDefault}
                                    onClick={handleToggleDefault}
                                    title="Highlight all non-init values"
                                />
                                <Form.Check
                                    label="All"
                                    name="show"
                                    type="switch"
                                    id="id-show"
                                    checked={showAll}
                                    onClick={handleToggleShow}
                                    title="Show all instruments"
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <NordDevice data={data} showAll={showAll} production={production} />
                </div>
            )}
        </>
    );
};

export default Main;
