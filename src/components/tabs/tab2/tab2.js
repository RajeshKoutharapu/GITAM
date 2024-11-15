import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Modal from '../../Modal/Modal'; 
import './tab2.css'; 

const Tab2 = () => {
  const [generalInstrumentRows, setGeneralInstrumentRows] = useState(0);
  const [mainInstrumentsCount, setMainInstrumentsCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate(); 

  // Generates rows for the General Instruments table
  const generateGeneralInstrumentTable = (numRows) => {
    return Array.from({ length: numRows }, (_, i) => (
      <tr key={i}>
        <td>
          <select className="form-select">
          <option value="Automic absorption spectroscopy">Automic absorption spectroscopy</option>
          <option value="CE">CE</option>
          <option value="CE-MS">CE-MS</option>
          <option value="Dissolution">Dissolution</option>
          <option value="FT-IR">FT-IR</option>
          <option value="GC">GC</option>
          <option value="GC/MSD">GC/MSD</option>
          <option value="HPLC">HPLC</option>
          <option value="HPLC-Prep">HPLC-Prep</option>
          <option value="ICP-MS">ICP-MS</option>
          <option value="ICP-OES">ICP-OES</option>
          <option value="LC/MSD iQ">LC/MSD iQ</option>
          <option value="Nano Spectrophotometer">Nano Spectrophotometer</option>
          <option value="NMR">NMR</option>
          <option value="Potentiometry">Potentiometry</option>
          <option value="Portable CE">Portable CE</option>
          <option value="Raman Spectrometer">Raman Spectrometer</option>
          <option value="SFC">SFC</option>
          <option value="SFC-Prep">SFC-Prep</option>
          <option value="Single Quadrupole GC-MS">Single Quadrupole GC-MS</option>
          <option value="TOC Analyzer">TOC Analyzer</option>
          <option value="Triple Quadrupole GC/MS">Triple Quadrupole GC/MS</option>
          <option value="Triple Quadrupole LC/MS system">Triple Quadrupole LC/MS system</option>
          <option value="UHPLC (UPLC)">UHPLC (UPLC)</option>
          <option value="UV-Vis Spectrophotometer">UV-Vis Spectrophotometer</option>
          <option value="XRD Diffractometer">XRD Diffractometer</option>
          <option value="XRF-Spectrometer">XRF-Spectrometer</option>

          </select>
        </td>
        <td><input type="text" className="form-control" placeholder="Enter time in mins" /></td>
      </tr>
    ));
  };

  // Generates tables for the Main Instruments section
  const generateMainInstrumentTables = (numTables) => {
    const firstColumnValues = [
      "Column Length", "Column Temperature", "Sample Temperature",
      "Flow Rate", "Run Time", "Number of Injections"
    ];

    return Array.from({ length: numTables }, (_, i) => {
      const rows = firstColumnValues.map((value, j) => (
        <tr key={j}>
          <td>{value}</td>
          <td><input type="text" className="form-control" placeholder="Enter operating conditions" /></td>
        </tr>
      ));

      return (
        <table key={i} className="table table-bordered">
          <thead>
            <tr>
              <th>
                <select className="form-select">
                <option value="(-)40°C freezer">(-)40°C freezer</option>
                <option value="Amino Acid Analyzer">Amino Acid Analyzer</option>
                <option value="Alloy Analyzer">Alloy Analyzer</option>
                <option value="Autoclave">Autoclave</option>
                <option value="Balance">Balance</option>
                <option value="Centrifuges">Centrifuges</option>
                <option value="Chemiluminescent Immunoassay Analyzer">Chemiluminescent Immunoassay Analyzer</option>
                <option value="Cold Centrifuges">Cold Centrifuges</option>
                <option value="Conductavity meter">Conductavity meter</option>
                <option value="Dehumidifier">Dehumidifier</option>
                <option value="Differential Scanning Calorimeter">Differential Scanning Calorimeter</option>
                <option value="Disintegration Tester">Disintegration Tester</option>
                <option value="Fume hood">Fume hood</option>
                <option value="Flame Photometer">Flame Photometer</option>
                <option value="Flammability Tester">Flammability Tester</option>
                <option value="Flow Meter and Electronic Leak Detector">Flow Meter and Electronic Leak Detector</option>
                <option value="Fume hood">Fume hood</option>
                <option value="Gas laser">Gas laser</option>
                <option value="Gel Strength Test System">Gel Strength Test System</option>
                <option value="Homogenizer">Homogenizer</option>
                <option value="Hot air oven">Hot air oven</option>
                <option value="Hot plate with stirrer">Hot plate with stirrer</option>
                <option value="Hybridization Oven">Hybridization Oven</option>
                <option value="IR Carbon and Sulphur Analyzer">IR Carbon and Sulphur Analyzer</option>
                <option value="Incubated and Refrigerated Benchtop Shaker">Incubated and Refrigerated Benchtop Shaker</option>
                <option value="Liquid Suction Filtration Vacuum Pump">Liquid Suction Filtration Vacuum Pump</option>
                <option value="Liquid nitrogen freezer">Liquid nitrogen freezer</option>
                <option value="Magnetic stirrer">Magnetic stirrer</option>
                <option value="Melting Point Apparatus">Melting Point Apparatus</option>
                <option value="Microscopes">Microscopes</option>
                <option value="Milk Analyzer">Milk Analyzer</option>
                <option value="Milk Fat Analyzer">Milk Fat Analyzer</option>
                <option value="Microwave Digestion System">Microwave Digestion System</option>
                <option value="Nucleic Acid Extraction System">Nucleic Acid Extraction System</option>
                <option value="Nucleic Acid Purification System">Nucleic Acid Purification System</option>
                <option value="Orbitol shaker">Orbitol shaker</option>
                <option value="Osmometer">Osmometer</option>
                <option value="Peristaltic Pump">Peristaltic Pump</option>
                <option value="pH meter">pH meter</option>
                <option value="Polarimeter">Polarimeter</option>
                <option value="Refrigerators">Refrigerators</option>
                <option value="Sample Concentrator">Sample Concentrator</option>
                <option value="Slide Dryer">Slide Dryer</option>
                <option value="Solutions Remediator">Solutions Remediator</option>
                <option value="Sonicator">Sonicator</option>
                <option value="Specific Gravity Tester">Specific Gravity Tester</option>
                <option value="Stroboscope">Stroboscope</option>
                <option value="Sulphur Content Tester">Sulphur Content Tester</option>
                <option value="Tablet Hardness Testers">Tablet Hardness Testers</option>
                <option value="Tap Density Tester">Tap Density Tester</option>
                <option value="Tissue Culture Hoods, UV light">Tissue Culture Hoods, UV light</option>
                <option value="Tube Roller Mixer">Tube Roller Mixer</option>
                <option value="Ultra-Low Freezers">Ultra-Low Freezers</option>
                <option value="Ubbelohde Viscometer">Ubbelohde Viscometer</option>
                <option value="Vacuum Pump">Vacuum Pump</option>
                <option value="Vertical Laminar Flow Cabinet">Vertical Laminar Flow Cabinet</option>
                <option value="Vortex mixer">Vortex mixer</option>
                <option value="Water bath">Water bath</option>
                <option value="Water Bath Shakers">Water Bath Shakers</option>

                </select>
              </th>
              <th>Operating Conditions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    });
  };

  const openGuide = () => setShowModal(true);
  const closeGuide = () => setShowModal(false); // Function to close the modal

  return (
    <div className="container mt-4 tab2-container">
      <h3>Instruments/Equipments</h3>

      {/* General Instruments Section */}
      <div className="row mb-3">
        <label htmlFor="general-instruments" className="col-md-4 col-form-label">Number of General Instruments Used:</label>
        <div className="col-md-8">
          <input
            type="number"
            className="form-control"
            id="general-instruments"
            min="1"
            placeholder="Enter number of rows"
            onChange={(e) => setGeneralInstrumentRows(e.target.value)}
          />
        </div>
      </div>

      {generalInstrumentRows > 0 && ( // Render table if generalInstrumentRows > 0
        <div className="table-section mb-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Time (mins)</th>
              </tr>
            </thead>
            <tbody>{generateGeneralInstrumentTable(generalInstrumentRows)}</tbody>
          </table>
        </div>
      )}

      {/* Main Instruments Section */}
      <div className="row mb-3">
        <label htmlFor="main-instruments" className="col-md-4 col-form-label">Number of Main Instruments Used:</label>
        <div className="col-md-8">
          <input
            type="number"
            className="form-control"
            id="main-instruments"
            min="1"
            placeholder="Enter number of rows"
            onChange={(e) => setMainInstrumentsCount(e.target.value)}
          />
        </div>
      </div>

      {mainInstrumentsCount > 0 && ( // Render tables if mainInstrumentsCount > 0
        <div className="table-section mb-4">
          {generateMainInstrumentTables(mainInstrumentsCount)}
        </div>
      )}

      {/* Navigation Footer */}
      <footer className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={() => navigate('/dashboard/tab1')}>Back</button> {/* Navigates to Tab 1 */}
        <button className="btn btn-primary" onClick={() => navigate('/dashboard/tab3')}>Next</button> {/* Navigates to Tab 3 */}
        <button className="btn btn-secondary" onClick={openGuide}>Guide 2</button>
      </footer>

      {/* Modal for Guide */}
      <Modal 
        isOpen={showModal} 
        closeModal={closeGuide} 
        title="Guide Information"
        content="This is some sample content for the guide. You can add your specific information here."
      />
    </div>
  );
};

export default Tab2;
