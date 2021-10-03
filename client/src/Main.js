import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import NordDevice from "./nord/nord-device";
import Button from "react-bootstrap/Button";
import {buildExport} from "./export/export-pdf";
import Home from "./Home";
import LoadButton from "./LoadButton";
import {useDispatch, useSelector} from "react-redux";
import {
    nordSelector,
    setError,
    setExporting,
    setExportingDetail,
    toggleShowAll,
    toggleShowDefault,
} from "./features/nord/nordSliceReducer";
import {Form, Navbar} from "react-bootstrap";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import NordManager from "./nord/nord-manager";


const Main = () => {
    const dispatch = useDispatch();
    const {
        loading,
        loaded,
        data,
        showAll,
        showDefault,
        exporting,
        exportDetails,
        production,
        programs,
        synths,
        managerTitle,
    } = useSelector(nordSelector);

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
        try {
            await buildExport(data, showAll, callback);
        } catch (e) {
            dispatch(setError(e.message));
        } finally {
            dispatch(setExporting(false));
        }
    };

    const exportDisabled = exporting || loading || data.length === 0;
    const showManager = programs.length !== 0 || synths.length !== 0;

    // empty space is added to 'hide' the export process
    const nordDeviceAndSpace = (
        <div>
            <NordDevice data={data} showAll={showAll} production={production} />
            <div style={{ height: "75vh" }} />
            <div id="exportTag" />
        </div>
    );

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
                                    disabled={exportDisabled}
                                    onClick={handleExport}
                                >
                                    {exporting ? "Exporting " + exportDetails : "Export"}
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                        <h5>{managerTitle}</h5>
                        <Navbar.Collapse className="justify-content-end">
                            <Form inline>
                                <Form.Check
                                    className="mr-5"
                                    label="Smart"
                                    name="default"
                                    type="switch"
                                    id="id-default"
                                    disabled={false}
                                    checked={showDefault}
                                    onChange={handleToggleDefault}
                                    title="Highlight all non-init values"
                                />
                                <Form.Check
                                    label="All"
                                    name="show"
                                    type="switch"
                                    id="id-show"
                                    checked={showAll}
                                    onChange={handleToggleShow}
                                    title="Show all instruments"
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    {showManager && (
                        <SplitterLayout
                            primaryIndex={1}
                            percentage={false}
                            secondaryInitialSize={350}
                            secondaryMinSize={10}
                        >
                            <NordManager/>
                            {nordDeviceAndSpace}
                        </SplitterLayout>
                    )}
                    {!showManager && nordDeviceAndSpace}
                </div>
            )}
        </>
    );
};

export default Main;
