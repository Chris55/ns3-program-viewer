import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../App.scss";
import "ag-grid-community/dist/styles/ag-grid.css";
//import "ag-grid-community/dist/styles/ag-theme-material.css";
//import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useDispatch, useSelector } from "react-redux";
import { nordSelector, setLoadingSuccess, setManagerSelection } from "../features/nord/nordSliceReducer";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-splitter-layout/lib/index.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { BsSearch } from "react-icons/bs";

const showPerformance = [".nlasbundle", ".nlab"];
const showSynth = [".ns3b", ".ns3fb", ".ns3synthpb", ".ns2pb", ".ns2exb", ".ns2b", ".ns2synthpb", ".ns3sbundle"];
const showLive = [".ns3b", ".ns3fb", ".ns3synthpb", ".ns2pb", ".ns2exb", ".ns2b", ".ns2synthpb", ".ns3sbundle"];

const NordManager = () => {
    const { programs, synths, lives, performances, managerSelectedIndexes, managerTabSelection, managerFileExt } =
        useSelector(nordSelector);

    const [gridApi, setGridApi] = useState(null);
    //const [gridColumnApi, setGridColumnApi] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPrograms, setCurrentPrograms] = useState(programs);

    const dispatch = useDispatch();

    const saveIndexes = (e) => {
        let selectedNodes = e.api.getSelectedNodes();
        const indexes = selectedNodes.map((node) => node.data.model.uuid);
        dispatch(
            setManagerSelection({
                managerTabSelection,
                indexes,
            })
        );
    };

    const onSelectionChanged = (event) => {
        let selectedNodes = event.api.getSelectedNodes();
        let selectedData = selectedNodes
            .sort((a, b) => {
                return a.rowIndex - b.rowIndex;
            })
            .map((node) => node.data.model);

        saveIndexes(event);

        dispatch(
            setLoadingSuccess({
                data: selectedData,
                originalData: selectedData,
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

    const onRowDataLoaded = (e) => {
        const selection =
            managerSelectedIndexes[managerTabSelection] && managerSelectedIndexes[managerTabSelection].length > 0;
        let firstSelectedNode;

        e.api.forEachNode((node) => {
            let selected;
            if (selection) {
                selected = managerSelectedIndexes[managerTabSelection].includes(node.data.model.uuid);
            } else {
                selected = node.rowIndex === 0;
            }
            node.setSelected(selected);

            if (selected && !firstSelectedNode) {
                firstSelectedNode = node;
                e.api.ensureNodeVisible(node, "middle");
            }
        });
    };

    const onFilterTextBoxChanged = (e) => {
        setSearch(e.target.value);
        gridApi.setQuickFilter(e.target.value);
    };

    const onSelectProgramDropdown = (eventKey) => {
        switch (eventKey) {
            case "Synth":
                setCurrentPrograms(synths);
                break;
            case "Live":
                setCurrentPrograms(lives);
                break;
            case "Performance":
                setCurrentPrograms(performances);
                break;
            default:
                setCurrentPrograms(programs);
        }

        dispatch(
            setManagerSelection({
                managerTabSelection: eventKey,
            })
        );
    };

    const onSortChanged = (e) => {
        console.log("onSortChanged()");
        onRowDataLoaded(e);
    };

    const gridClass = "ag-theme-custom-react";

    useEffect(() => {
        onSelectProgramDropdown(managerTabSelection);
    }, [programs, synths]);

    return (
        <>
            <div className="manager-search-area d-flex justify-content-between">
                <div className="form-group has-search mt-2 ml-2">
                    <BsSearch className="form-control-feedback" />
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
                        title={managerTabSelection}
                    >
                        <Dropdown.Item key="Program" eventKey="Program">
                            Program
                        </Dropdown.Item>
                        <Dropdown.Item key="Synth" eventKey="Synth">
                            Synth
                        </Dropdown.Item>
                        <Dropdown.Item key="Live" eventKey="Live">
                            Live
                        </Dropdown.Item>
                        {/*{managerFileExt === "" ||*/}
                        {/*    (showSynth.includes(managerFileExt) && (*/}
                        {/*        <Dropdown.Item eventKey="Synth">Synth</Dropdown.Item>*/}
                        {/*    ))}*/}

                        {/*{showLive.includes(managerFileExt) && <Dropdown.Item eventKey="Live">Live</Dropdown.Item>}*/}

                        {/*{showPerformance.includes(managerFileExt) && (*/}
                        {/*    <Dropdown.Item eventKey="Performance">Performance</Dropdown.Item>*/}
                        {/*)}*/}
                    </DropdownButton>
                </div>
            </div>

            <div
                className={gridClass}
                style={{
                    height: "77vh",
                    width: "100%",
                }}
            >
                <AgGridReact
                    onGridReady={onGridReady}
                    onGridSizeChanged={onGridSizeChanged}
                    onSelectionChanged={onSelectionChanged}
                    onRowDataChanged={onRowDataLoaded}
                    onSortChanged={onSortChanged}
                    rowData={currentPrograms}
                    defaultColDef={{
                        sortable: true,
                        resizable: true,
                        // comparator: customComparator,
                    }}
                    sortingOrder={["desc", "asc"]}
                    rowSelection={"multiple"}
                    overlayNoRowsTemplate={
                        '<span style="padding: 10px; border: 1px solid #444; background: lightgoldenrodyellow;">Nothing To Show</span>'
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

// const customComparator = (valueA, valueB) => {
//     return valueA.toLowerCase().localeCompare(valueB.toLowerCase());
// };

export default NordManager;
