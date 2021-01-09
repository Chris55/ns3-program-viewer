import React, {Component} from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import NordDevice from "./components/nord-device";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


const PdfExport = ({data, showAll}) => (
    <Document>
        <Page size="A4" style={styles.page} >
            <View style={styles.section} wrap={true}>
                <NordDevice
                    data={data}
                    showAll={showAll}
                    production={true}
                />
            </View>
        </Page>
    </Document>
);

export default PdfExport;


