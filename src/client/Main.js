import React, { useState, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
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
    toggleShowManager,
} from "./features/nord/nord-slice-reducer";
import { Dropdown, Form, ProgressBar } from "react-bootstrap";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import { buildExportCsv } from "./export/export-csv";
import cx from "classnames";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { GrDocumentCsv } from "react-icons/gr";
import { ExportDialog } from "./export/ExportDialog";
import { useWindowSize } from "@react-hook/window-size";
import NordDevice from "./nord/nord-device";
// noinspection JSCheckFunctionSignatures
const NordManager = React.lazy(() => import("./nord/nord-manager"));

const Main = () => {
    const dispatch = useDispatch();
    const {
        loading,
        loaded,
        progress,
        data,
        showAll,
        showDefault,
        showManager,
        exporting,
        production,
        programs,
        synths,
        lives,
        performances,
        managerTitle,
        exportRange,
    } = useSelector(nordSelector);

    const [width, height] = useWindowSize();
    const [showExportDialog, setShowExportDialog] = useState(false);

    const handleToggleShow = () => {
        dispatch(toggleShowAll());
    };

    const handleToggleDefault = () => {
        dispatch(toggleShowDefault());
    };

    const handleToggleManager = () => {
        dispatch(toggleShowManager());
    };

    const exportCallback = (title, currentStep, numberOfSteps, currentValue, maxValue) => {
        const stepSize = 100 / numberOfSteps;
        const p = currentStep * stepSize + ((currentValue + 1) * stepSize) / maxValue;
        dispatch(setExportingDetail(title));
        dispatch(setProgress({ p }));
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
        if (managerTitle) {
            setShowExportDialog(true);
        } else {
            await runExportCsv(true);
        }
    };

    const runExportCsv = async (ok) => {
        setShowExportDialog(false);

        if (!ok) return;

        dispatch(setExporting(true));
        try {
            if (managerTitle && exportRange === "all") {
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

    // empty space is added to 'hide' the export process
    const nordDeviceAndSpace = (
        <div>
            <NordDevice data={data} showAll={showAll} production={production} />
            <div style={{ height: "75vh" }} />
            <div id="exportTag" />
        </div>
    );

    const isVerticalLayout = width < height;

    return (
        <>
            <ExportDialog show={showExportDialog} handleClose={runExportCsv} />

            {!loaded && <Home />}

            {loaded && (
                <div>
                    <ProgressBar
                        className={cx("bg-light", {
                            "progress-fadeOut": progress === 100,
                        })}
                        now={progress}
                    />

                    <div className="bg-light p-1 d-flex justify-content-between">
                        <div>
                            <Form inline className="ml-n2">
                                <LoadButton className="nav-link" variant="light" />

                                <Dropdown className="mr-2">
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        {exporting ? "Exporting" : "Export"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleExportPdf} disabled={exportDisabled}>
                                            <div className="d-flex justify-content-between">
                                                <div className="mr-4">As PDF File</div>
                                                <div>
                                                    <BsFileEarmarkPdf />
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={handleExportCsv} disabled={exportDisabled}>
                                            <div className="d-flex justify-content-between">
                                                <div>As CSV File</div>
                                                <div>
                                                    <GrDocumentCsv />
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                {!isVerticalLayout && (
                                    <Form.Check
                                        className="ml-3"
                                        label="Manager"
                                        name="default"
                                        type="switch"
                                        id="id-manager"
                                        disabled={false}
                                        checked={showManager}
                                        onChange={handleToggleManager}
                                        title="Display the Program Manager"
                                    />
                                )}
                            </Form>
                        </div>

                        <div className="my-auto  px-1" style={{ paddingTop: "0.5rem" }}>
                            <h5>{managerTitle}</h5>
                        </div>

                        <div className="mr-md-2 my-auto">
                            <Form inline>
                                {isVerticalLayout && (
                                    <Form.Check
                                        className="mr-1"
                                        label="Manager"
                                        name="default"
                                        type="switch"
                                        id="id-manager"
                                        disabled={false}
                                        checked={showManager}
                                        onChange={handleToggleManager}
                                        title="Display the Program Manager"
                                    />
                                )}

                                <Form.Check
                                    className="mr-1 mr-lg-4"
                                    label="Smart"
                                    name="default"
                                    type="switch"
                                    id="id-default"
                                    disabled={false}
                                    checked={showDefault}
                                    onChange={handleToggleDefault}
                                    title="Highlight in red all non-init values"
                                />

                                <Form.Check
                                    className="mr-1"
                                    label="All"
                                    name="show"
                                    type="switch"
                                    id="id-show"
                                    checked={showAll}
                                    onChange={handleToggleShow}
                                    title="Show all instruments"
                                />
                            </Form>
                        </div>
                    </div>

                    {showManager && (
                        <SplitterLayout
                            primaryIndex={1}
                            percentage={false}
                            secondaryInitialSize={350}
                            secondaryMinSize={10}
                            vertical={isVerticalLayout}
                        >
                            <Suspense
                                fallback={
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                }
                            >
                                <NordManager />
                            </Suspense>

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
