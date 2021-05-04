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
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
    const dispatch = useDispatch();
    const { loaded, data, showAll, exporting, exportDetails, production } = useSelector(nordSelector);

    const handleShowAll = () => {
        if (!showAll) {
            dispatch(toggleShowAll());
        }
    };

    const handleShowDefault = () => {
        if (showAll) {
            dispatch(toggleShowAll());
        }
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
                <div>
                    <Container fluid className="p-2">
                        <Row className="mt-2 mb-1 justify-content-start align-content-center">
                            <Col md="auto">
                                <LoadButton variant="primary" size="sm" />
                            </Col>

                            <Col md="auto">
                                <Button variant="primary" size="sm" disabled={exporting} onClick={handleExport}>
                                    {exporting ? "Exporting " + exportDetails : "Export"}
                                </Button>
                            </Col>

                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className={showAll ? "mr-1" : "mr-1 disabled"}
                                    onClick={handleShowAll}
                                >
                                    Show All
                                </Button>
                            </Col>

                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className={!showAll ? "mr-1" : "mr-1 disabled"}
                                    onClick={handleShowDefault}
                                >
                                    Show Default
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                    <NordDevice data={data} showAll={showAll} production={production} />
                </div>
            )}
        </>
    );
};

export default Main;
