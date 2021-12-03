import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import NordDevice from "./nord/nord-device";
import { buildExportPdf } from "./export/export-pdf";
import Home from "./Home";
import LoadButton from "./LoadButton";
import { useDispatch, useSelector } from "react-redux";
import {
    nordSelector,
    setError,
    setExporting,
    setExportingDetail,
    toggleShowAll,
    toggleShowDefault,
} from "./features/nord/nordSliceReducer";
import { Dropdown, Form, Navbar, ProgressBar } from "react-bootstrap";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import NordManager from "./nord/nord-manager";
import { buildExportCsv } from "./export/export-csv";
import cx from "classnames";

const Main = () => {
    const dispatch = useDispatch();
    const {
        loading,
        loaded,
        progress,
        data,
        showAll,
        showDefault,
        exporting,
        exportDetails,
        production,
        programs,
        synths,
        lives,
        performances,
        managerTitle,
    } = useSelector(nordSelector);

    const handleToggleShow = () => {
        dispatch(toggleShowAll());
    };

    const handleToggleDefault = () => {
        dispatch(toggleShowDefault());
    };

    const handleExportPdf = async () => {
        const callback = (name) => {
            dispatch(setExportingDetail(name));
        };
        dispatch(setExporting(true));
        try {
            await buildExportPdf(data, showAll, callback);
        } catch (e) {
            dispatch(setError(e.message));
        } finally {
            dispatch(setExporting(false));
        }
    };

    const handleExportCsv = async () => {
        const callback = (name) => {
            dispatch(setExportingDetail(name));
        };
        dispatch(setExporting(true));
        try {
            if (managerTitle) {
                await buildExportCsv(
                    [
                        ...programs.map((x) => x.model),
                        ...synths.map((x) => x.model),
                        ...lives.map((x) => x.model),
                        ...performances.map((x) => x.model),
                    ],
                    callback,
                    managerTitle
                );
            } else {
                await buildExportCsv(data, callback, data.length === 1 ? data[0].filename : "Nord");
            }
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
                    <ProgressBar
                        className={cx("bg-light", {
                            "progress-fadeOut": progress === 100,
                        })}
                        now={progress}
                    />

                    <Navbar className="bg-light">
                        <Navbar.Collapse className="">
                            <Form inline className="ml-n2">
                                <LoadButton className="nav-link" variant="light" />
                                {/*<Button*/}
                                {/*    className="nav-link"*/}
                                {/*    variant="light"*/}
                                {/*    disabled={exportDisabled}*/}
                                {/*    onClick={handleExport}*/}
                                {/*>*/}
                                {/*    {exporting ? "Exporting " + exportDetails : "Export"}*/}
                                {/*</Button>*/}
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        {exporting ? "Exporting " + exportDetails : "Export"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleExportPdf} disabled={exportDisabled}>
                                            PDF File
                                        </Dropdown.Item>
                                        {/*<Dropdown.Item onClick={handleExportCsv} disabled={exportDisabled}>*/}
                                        {/*    CSV File*/}
                                        {/*</Dropdown.Item>*/}
                                    </Dropdown.Menu>
                                </Dropdown>
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
                            <NordManager />
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
