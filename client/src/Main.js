import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
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
import {AgGridColumn, AgGridReact} from "ag-grid-react";

const Main = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const dispatch = useDispatch();
    const {loading, loaded, data, showAll, showDefault, exporting, exportDetails, production, programs} = useSelector(
        nordSelector
    );

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

    const onRowClicked = () => {
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

    return (
        <>
            {!loaded && <Home/>}

            {loaded && (
                <div>
                    <Navbar className="bg-light">
                        <Navbar.Collapse className="">
                            <Form inline className="ml-n2">
                                <LoadButton className="nav-link" variant="light"/>
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

                    <SplitterLayout
                        primaryIndex={1}
                        percentage={false}
                        secondaryInitialSize={250}
                        secondaryMinSize={10}
                    >
                        <div>

                            <div
                                className="ag-theme-bootstrap"
                                style={{
                                    height: "100px",
                                    width: "100%",
                                }}
                            >
                                <AgGridReact
                                    onGridReady={onGridReady}
                                    onGridSizeChanged={onGridSizeChanged}
                                    onRowClicked={onRowClicked}
                                    rowData={programs}
                                    rowHeight={30}
                                >
                                    {/*<AgGridColumn field="location" sortable={true}/>*/}
                                    <AgGridColumn field="name" sortable={true}/>
                                </AgGridReact>
                            </div>

                        </div>
                        <div>
                            <NordDevice data={data} showAll={showAll} production={production}/>
                        </div>
                    </SplitterLayout>
                </div>
            )}
        </>
    );
};

export default Main;
