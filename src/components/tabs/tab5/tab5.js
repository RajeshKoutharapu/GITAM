import React, { useEffect, useState } from 'react';
import './tab5.css'; // Import your styles

const Tab5 = () => {
    const [reportData, setReportData] = useState({
        numAnalytes: '',
        totalEnergy: '',
        totalWaste: '',
        numSolutions: '',
        genInstruments: '',
        mainInstruments: '',
        instrumentPosition: '',
        samplePreparation: '',
        derivatization: '',
        wasteManagement: '',
        wasteInfo: '',
        resultsGreenness: '',
        finalResult: ''
    });

    // This function will fetch or calculate the values here
    const loadTab5Data = () => {
        // Replace these with actual calculation results if necessary
        const data = {
            numAnalytes: 5,
            totalEnergy: '150 kWh',
            totalWaste: '20 kg',
            numSolutions: 10,
            genInstruments: 3,
            mainInstruments: 2,
            instrumentPosition: 'Calibrated',
            samplePreparation: 'Completed',
            derivatization: 'Not Required',
            wasteManagement: 'Yes',
            wasteInfo: 'Recycled properly',
            resultsGreenness: '75%',
            finalResult: 'Successful'
        };

        setReportData(data);
    };

    useEffect(() => {
        loadTab5Data(); // Load data when the component mounts
    }, []);

    return (
        <div className="tab-content">
            <h2>Report</h2>
            <div className="report-content">
                <p><strong>Number of Analytes Studied:</strong> <span>{reportData.numAnalytes}</span></p>
                <p><strong>Total Energy Consumed:</strong> <span>{reportData.totalEnergy}</span></p>
                <p><strong>Total Waste Generated:</strong> <span>{reportData.totalWaste}</span></p>
                <p><strong>Number of Solutions Prepared (STD + SST + SPL):</strong> <span>{reportData.numSolutions}</span></p>
                <p><strong>Number of General Instruments Used:</strong> <span>{reportData.genInstruments}</span></p>
                <p><strong>Number of Main Instruments Used:</strong> <span>{reportData.mainInstruments}</span></p>
                <p><strong>Instrument Position:</strong> <span>{reportData.instrumentPosition}</span></p>
                <p><strong>Sample Preparation:</strong> <span>{reportData.samplePreparation}</span></p>
                <p><strong>Derivatization:</strong> <span>{reportData.derivatization}</span></p>
                <p><strong>Waste Management:</strong> <span>{reportData.wasteManagement}</span></p>
                <p><strong>Waste Management Information (If Yes):</strong> <span>{reportData.wasteInfo}</span></p>
                <p><strong>Results % Greenness:</strong> <span>{reportData.resultsGreenness}</span></p>
                <p><strong>Final Result:</strong> <span>{reportData.finalResult}</span></p>
            </div>
        </div>
    );
};

export default Tab5;
