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
            <option value="instrument1">Instrument 1</option>
            <option value="instrument2">Instrument 2</option>
            <option value="instrument3">Instrument 3</option>
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
                  <option value="instrument1">Instrument 1</option>
                  <option value="instrument2">Instrument 2</option>
                  <option value="instrument3">Instrument 3</option>
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
