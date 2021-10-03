import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../App.scss";
import "ag-grid-community/dist/styles/ag-grid.css";
//import "ag-grid-community/dist/styles/ag-theme-material.css";
//import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useDispatch, useSelector } from "react-redux";
import { nordSelector, setError, setLoadingSuccess } from "../features/nord/nordSliceReducer";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import "react-splitter-layout/lib/index.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { Search } from "react-bootstrap-icons";
import { toast } from "react-toastify";

const NordManager = () => {
    const { programs, synths } = useSelector(nordSelector);

    const [gridApi, setGridApi] = useState(null);
    //const [gridColumnApi, setGridColumnApi] = useState(null);
    const [search, setSearch] = useState(null);
    const [programType, setProgramType] = useState("Program");
    const [currentPrograms, setCurrentPrograms] = useState(programs);

    const dispatch = useDispatch();

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
        //setGridColumnApi(params.columnApi);
    };

    const onGridSizeChanged = () => {
        if (gridApi) {
            gridApi.sizeColumnsToFit();
        }
    };

    const onFilterTextBoxChanged = (e) => {
        gridApi.setQuickFilter(e.target.value);
    };

    const onSelectProgramDropdown = (eventKey) => {
        if (eventKey === "Program") {
            setCurrentPrograms(programs);
        }
        if (eventKey === "Synth") {
            setCurrentPrograms(synths);
        }
        setProgramType(eventKey);
    };

    const gridClass = "ag-theme-custom-react";

    useEffect(() => {
        onSelectProgramDropdown(programType);
    }, [programs, synths]);

    return (
        <>
            <div className="manager-search-area d-flex justify-content-between">
                <div className="form-group has-search mt-2 ml-2">
                    <Search className="form-control-feedback" />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={search}
                        onChange={onFilterTextBoxChanged}
                    />
                </div>

                <div className="mr-0">
                    <DropdownButton
                        className="nav-link"
                        onSelect={onSelectProgramDropdown}
                        id="dropdown-program"
                        variant="dark"
                        title={programType}
                    >
                        <Dropdown.Item eventKey="Program">Program</Dropdown.Item>
                        <Dropdown.Item eventKey="Synth">Synth</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>

            <div
                className={gridClass}
                style={{
                    height: "85vh",
                    width: "100%",
                }}
            >
                <AgGridReact
                    onGridReady={onGridReady}
                    onGridSizeChanged={onGridSizeChanged}
                    onRowClicked={onRowClicked}
                    rowData={currentPrograms}
                    defaultColDef={{
                        sortable: true,
                        resizable: true,
                        // comparator: customComparator,
                    }}
                    sortingOrder={["desc", "asc"]}
                    rowSelection={"multiple"}
                    overlayNoRowsTemplate={
                        '<span style="padding: 10px; border: 1px solid #444; background: lightgoldenrodyellow;">No Programs To Show</span>'
                    }
                >
                    <AgGridColumn headerName="Loc" field="location" width={116} sort={"asc"} />
                    <AgGridColumn field="name" width={180} />
                    <AgGridColumn field="category" width={120} />
                    <AgGridColumn field="version" width={80} />
                </AgGridReact>
            </div>
        </>
    );
};

const customComparator = (valueA, valueB) => {
    return valueA.toLowerCase().localeCompare(valueB.toLowerCase());
};

export default NordManager;
