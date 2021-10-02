import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import "ag-grid-community/dist/styles/ag-grid.css";
//import "ag-grid-community/dist/styles/ag-theme-material.css";
//import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

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
    setLoadingSuccess,
    toggleShowAll,
    toggleShowDefault,
} from "./features/nord/nordSliceReducer";
import { Col, Form, Navbar, Row } from "react-bootstrap";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Main = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

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

    const onRowClicked = (event) => {
        let selectedNodes = event.api.getSelectedNodes();
        let selectedData = selectedNodes
            .sort((a, b) => {
                return a.rowIndex - b.rowIndex;
            })
            .map((node) => node.data.model);

        dispatch(
            setLoadingSuccess({
                loaded: true,
                loading: false,
                data: selectedData,
                originalData: selectedData,
                error: null,
                showAll: false,
            })
        );
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };

    const onGridSizeChanged = () => {
        if (gridApi) {
            gridApi.sizeColumnsToFit();
        }
    };

    const showManager = programs.length !== 0 || synths.length !== 0;
    const gridClass = "ag-theme-custom-react";

    // empty space is added to 'hide' the export process
    const nordDevice = (
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
                                    disabled={exporting || loading}
                                    onClick={handleExport}
                                >
                                    {exporting ? "Exporting " + exportDetails : "Export"}
                                </Button>
                            </Form>
                        </Navbar.Collapse>
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
                            <div>
                                <Tabs id="manager">
                                    <Tab eventKey="program" title="Program">
                                        <div
                                            className={gridClass}
                                            style={{
                                                height: "80vh",
                                                width: "100%",
                                            }}
                                        >
                                            <AgGridReact
                                                onGridReady={onGridReady}
                                                onGridSizeChanged={onGridSizeChanged}
                                                onRowClicked={onRowClicked}
                                                rowData={programs}
                                                // rowHeight={30}
                                                rowSelection={"multiple"}
                                            >
                                                <AgGridColumn
                                                    headerName="Loc"
                                                    field="location"
                                                    width={90}
                                                    sort={"asc"}
                                                    resizable={true}
                                                    sortable={true}
                                                />
                                                <AgGridColumn
                                                    field="name"
                                                    width={180}
                                                    sortable={true}
                                                    resizable={true}
                                                    comparator={customComparator}
                                                />
                                                <AgGridColumn
                                                    field="category"
                                                    width={120}
                                                    sortable={true}
                                                    resizable={true}
                                                    comparator={customComparator}
                                                />
                                                <AgGridColumn
                                                    field="version"
                                                    width={80}
                                                    sortable={true}
                                                    resizable={true}
                                                    comparator={customComparator}
                                                />
                                            </AgGridReact>
                                        </div>
                                    </Tab>

                                    <Tab eventKey="synth" title="Synth" disabled={false}>
                                        <div
                                            className={gridClass}
                                            style={{
                                                height: "80vh",
                                                width: "100%",
                                            }}
                                        >
                                            <AgGridReact
                                                onGridReady={onGridReady}
                                                onGridSizeChanged={onGridSizeChanged}
                                                onRowClicked={onRowClicked}
                                                rowData={synths}
                                                //  rowHeight={30}
                                                rowSelection={"multiple"}
                                            >
                                                <AgGridColumn
                                                    headerName="Loc"
                                                    field="location"
                                                    width={90}
                                                    sort={"asc"}
                                                    resizable={true}
                                                    sortable={true}
                                                />
                                                <AgGridColumn
                                                    field="name"
                                                    width={180}
                                                    sortable={true}
                                                    resizable={true}
                                                    comparator={customComparator}
                                                />
                                                <AgGridColumn
                                                    field="category"
                                                    width={120}
                                                    sortable={true}
                                                    resizable={true}
                                                    comparator={customComparator}
                                                />
                                                <AgGridColumn
                                                    field="version"
                                                    width={80}
                                                    sortable={true}
                                                    resizable={true}
                                                    comparator={customComparator}
                                                />
                                            </AgGridReact>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                            {nordDevice}
                        </SplitterLayout>
                    )}
                    {!showManager && nordDevice}
                </div>
            )}
        </>
    );
};

const customComparator = (valueA, valueB) => {
    return valueA.toLowerCase().localeCompare(valueB.toLowerCase());
};

export default Main;
