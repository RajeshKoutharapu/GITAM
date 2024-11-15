import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Modal from '../../Modal/Modal'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './tab1.css'; 

const Tab1 = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [standardsRows, setStandardsRows] = useState(0);
  const [resolutionsRows, setResolutionsRows] = useState(0);
  const [samplesRows, setSamplesRows] = useState(0);

  const navigate = useNavigate(); 

  const handleStandardsChange = (e) => setStandardsRows(e.target.value);
  const handleResolutionsChange = (e) => setResolutionsRows(e.target.value);
  const handleSamplesChange = (e) => setSamplesRows(e.target.value);

  const openGuide = () => setShowModal(true);
  const closeGuide = () => setShowModal(false); 

  const generateTable = (rows) => {
    return Array.from({ length: rows }, (_, i) => (
      <tr key={i}>
        <td><input type="text" className="form-control" placeholder="Weight in mL or g" /></td>
        <td><input type="text" className="form-control" placeholder="Volume of solution consumed in mL" /></td>
        <td>
          <select className="form-select">
            <option value="sample1">None</option>
            <option value="sample2">Sedimentation</option>
            <option value="sample3">Centrifuge</option>
            <option value="sample3">Centrifuge</option>
            <option value="sample3">Membrane filtrtaion</option>
            <option value="sample3">Centrifuge + filtrtation</option>
          </select>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mt-4 tab1-container">
      <h3>Title & Preparations</h3>
      
      {/* Title Input (Label and input in the same row) */}
      <div className="row mb-3">
        <label htmlFor="title" className="col-md-4 col-form-label">Name/Title:</label>
        <div className="col-md-8">
          <input type="text" className="form-control" id="title" placeholder="Enter title here..." />
        </div>
      </div>

      {/* Standards Input (Label and input in the same row) */}
      <div className="row mb-3">
        <label htmlFor="standards" className="col-md-4 col-form-label">No. of Standards/Ref:</label>
        <div className="col-md-8">
          <input type="number" className="form-control" id="standards" min="1" placeholder="Enter number of rows" onChange={handleStandardsChange} />
        </div>
      </div>
      {/* Only render the table if standardsRows is greater than 0*/}
      {standardsRows > 0 && ( 
        <div className="table-section mb-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Weight in mL or g</th>
                <th>Volume of solution consumed in mL</th>
                <th>Filtration</th>
              </tr>
            </thead>
            <tbody>
              {generateTable(standardsRows)}
            </tbody>
          </table>
        </div>
      )}

      {/* Resolutions Input (Label and input in the same row) */}
      <div className="row mb-3">
        <label htmlFor="resolutions" className="col-md-4 col-form-label">No. of Resolution/SST/other solution:</label>
        <div className="col-md-8">
          <input type="number" className="form-control" id="resolutions" min="1" placeholder="Enter number of rows" onChange={handleResolutionsChange} />
        </div>
      </div>
      {resolutionsRows > 0 && ( // Only render the table if resolutionsRows is greater than 0
        <div className="table-section mb-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Weight in mL or g</th>
                <th>Volume of solution consumed in mL</th>
                <th>Filtration</th>
              </tr>
            </thead>
            <tbody>
              {generateTable(resolutionsRows)}
            </tbody>
          </table>
        </div>
      )}

      {/* Samples Input (Label and input in the same row) */}
      <div className="row mb-3">
        <label htmlFor="samples" className="col-md-4 col-form-label">No. of Test Samples Prepared:</label>
        <div className="col-md-8">
          <input type="number" className="form-control" id="samples" min="1" placeholder="Enter number of rows" onChange={handleSamplesChange} />
        </div>
      </div>
      {samplesRows > 0 && ( // Only render the table if samplesRows is greater than 0
        <div className="table-section mb-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Weight in mL or g</th>
                <th>Volume of solution consumed in mL</th>
                <th>Filtration</th>
              </tr>
            </thead>
            <tbody>
              {generateTable(samplesRows)}
            </tbody>
          </table>
        </div>
      )}

      {/* Navigation Footer */}
      <footer className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={() => navigate('/dashboard/tab2')}>Next</button>{/* Navigates to next tab */}
        <button className="btn btn-secondary" onClick={openGuide}>Guide 1</button>
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

export default Tab1;
