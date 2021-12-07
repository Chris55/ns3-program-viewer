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
    fadeOutProgressBar,
    nordSelector,
    setError,
    setExporting,
    setExportingDetail,
    setProgress,
    toggleShowAll,
    toggleShowDefault,
} from "./features/nord/nordSliceReducer";
import { Dropdown, Form, Navbar, ProgressBar } from "react-bootstrap";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import NordManager from "./nord/nord-manager";
import { buildExportCsv } from "./export/export-csv";
import cx from "classnames";
import { BsFileEarmarkPdf, GrDocumentCsv } from "react-icons/all";

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

    const exportCallback = (title, currentStep, numberOfSteps, currentValue, maxValue) => {
        const stepSize = 100 / numberOfSteps;
        const progress = currentStep * stepSize + ((currentValue + 1) * stepSize) / maxValue;
        dispatch(setExportingDetail(title));
        dispatch(
            setProgress({
                progress,
            })
        );
    };

    const handleExportPdf = async () => {
        dispatch(setExporting(true));
        try {
            await buildExportPdf(data, showAll, exportCallback);
        } catch (e) {
            dispatch(setError(e.message));
        } finally {
            dispatch(setExporting(false));
            fadeOutProgressBar(dispatch);
        }
    };

    const handleExportCsv = async () => {
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
                    exportCallback,
                    managerTitle
                );
            } else {
                await buildExportCsv(data, exportCallback, data.length === 1 ? data[0].filename : "Nord");
            }
        } catch (e) {
            dispatch(setError(e.message));
        } finally {
            dispatch(setExporting(false));
            fadeOutProgressBar(dispatch);
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

                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" >
                                        {exporting ? "Exporting" : "Export"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleExportPdf} disabled={exportDisabled}>
                                            <div className="d-flex justify-content-between">
                                                <div className="mr-4">
                                                    As PDF File
                                                </div>
                                                <div>
                                                    <BsFileEarmarkPdf />
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={handleExportCsv} disabled={exportDisabled}>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    As CSV File
                                                </div>
                                                <div>
                                                    <GrDocumentCsv />
                                                </div>
                                            </div>
                                        </Dropdown.Item>
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
