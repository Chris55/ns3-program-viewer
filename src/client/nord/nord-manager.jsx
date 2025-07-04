import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../App.scss";
import { useDispatch, useSelector } from "react-redux";
import { nordSelector, setLoadingSuccess, setManagerSelection } from "../features/nord/nord-slice-reducer";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-splitter-layout/lib/index.css";
import { AgGridReact } from "ag-grid-react";
import { BsSearch } from "react-icons/bs";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const NordManager = () => {
    const { programs, synths, lives, performances, managerSelectedIndexes, managerTabSelection } =
        useSelector(nordSelector);

    const [gridApi, setGridApi] = useState(null);
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
            }),
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
            }),
        );
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
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
        gridApi.setGridOption("quickFilterText", e.target.value);
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
            }),
        );
    };

    const onSortChanged = (e) => {
        console.log("onSortChanged()");
        onRowDataLoaded(e);
    };

    const columnDefs = [
        { headerName: "Loc", field: "location", width: 90, sort: "asc" },
        { field: "name", width: 160 },
        { field: "category", width: 90 },
        { field: "version", width: 70 },
    ];

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
                    theme="legacy"
                    rowHeight={40}
                    onGridReady={onGridReady}
                    onGridSizeChanged={onGridSizeChanged}
                    onSelectionChanged={onSelectionChanged}
                    onRowDataUpdated={onRowDataLoaded}
                    onSortChanged={onSortChanged}
                    rowData={currentPrograms}
                    defaultColDef={{
                        sortable: true,
                        resizable: true,
                        sortingOrder: ["desc", "asc"],
                    }}
                    columnDefs={columnDefs}
                    selectionColumnDef={{
                        sortable: true,
                        // resizable: true,
                        // width: 100,
                        suppressHeaderMenuButton: true,
                        headerTooltip: "Checkboxes indicate selection",
                    }}
                    rowSelection={{
                        mode: "multiRow",
                        checkboxes: false,
                        headerCheckbox: false,
                        enableClickSelection: true,
                    }}
                    overlayNoRowsTemplate={
                        '<span style="padding: 10px; border: 1px solid #444; background: lightgoldenrodyellow;">Nothing To Show</span>'
                    }
                />
            </div>
        </>
    );
};

export default NordManager;
