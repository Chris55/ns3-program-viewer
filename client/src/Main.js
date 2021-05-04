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
    toggleShowAll,
} from "./features/nord/nordSliceReducer";

const Main = () => {
    const dispatch = useDispatch();
    const { loaded, data, showAll, exporting, exportDetails, production } = useSelector(nordSelector);

    const handleShowAll = () => {
        dispatch(toggleShowAll());
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
                <div className=" d-flex flex-column min-vh-100">
                    <div className=" flex-grow-1">
                            <div className="row mt-1 p-1">
                                <div className="col-auto m-1" >
                                    <LoadButton variant="primary" />
                                </div>

                                <div className="col-auto m-1">
                                    <span className="mr-2">Show All Instruments</span>

                                    <Button
                                        variant="primary"
                                        className={showAll ? "mr-1" : "mr-1 disabled"}
                                        onClick={handleShowAll}
                                    >
                                        On
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className={showAll ? "mr-1 disabled" : "mr-1"}
                                        onClick={handleShowAll}
                                    >
                                        Off
                                    </Button>
                                </div>

                                <div className="col-auto m-1">
                                    <Button variant="primary" disabled={exporting} onClick={handleExport}>
                                        {exporting ? "Saving " + exportDetails : "Save"}
                                    </Button>
                                </div>
                            </div>

                        <NordDevice data={data} showAll={showAll} production={production} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Main;
