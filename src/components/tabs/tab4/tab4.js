import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './tab4.css'; 
import Modal from '../../Modal/Modal';

const Tab4 = () => {
    const navigate = useNavigate();
    const [numAnalytes, setNumAnalytes] = useState('');
    const [numRows, setNumRows] = useState(0);
    const [wasteInfo, setWasteInfo] = useState('');
    const [showModal, setShowModal] = useState(false);
    
    const handleNumAnalytesChange = (e) => {
        setNumAnalytes(e.target.value);
    };

    const generateGeneralInstrumentTable = () => {
        const table = document.getElementById('general-instruments-table');
        table.innerHTML = '<tr><th>Name</th><th>Time in mins</th></tr>'; 

        for (let i = 0; i < numRows; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <select>
                        <option value="instrument1">Instrument 1</option>
                        <option value="instrument2">Instrument 2</option>
                        <option value="instrument3">Instrument 3</option>
                    </select>
                </td>
                <td><input type="text" placeholder="Enter time in mins"></td>
            `;
            table.appendChild(row);
        }
    };

    const openGuide = () => setShowModal(true);
    const closeGuide = () => setShowModal(false);

    return (
        <div className="tab-content">
            <h2>General</h2>
            <div className="form-group">
                <label htmlFor="numAnalytes">Number of Analytes Studied:</label>
                <input
                    type="text"
                    id="numAnalytes"
                    placeholder="Enter the number"
                    value={numAnalytes}
                    onChange={handleNumAnalytesChange}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="instrumentPosi">Instrument Posi (Insitu):</label>
                <select id="instrumentPosi">
                    <option value="selectCase">Select Case</option>
                    {/* Add more options as needed */}
                </select>
                <button id="guide3">Guide 3</button>
            </div>

            <div className="form-group">
                <label htmlFor="samplePreparation">Sample Preparation:</label>
                <select id="samplePreparation">
                    <option value="selectCase">Select Case</option>
                    {/* Add more options as needed */}
                </select>
                <button id="guide4">Guide 4</button>
            </div>

            <div className="form-group">
                <label htmlFor="derivatization">Derivatization:</label>
                <select id="derivatization">
                    <option value="selectCase">Select Case</option>
                    {/* Add more options as needed */}
                </select>
                <button id="guide5">Guide 5</button>
            </div>

            <div className="form-group">
                <label htmlFor="wasteManagementSamples">Waste Management of Samples:</label>
                <select id="wasteManagementSamples">
                    <option value="selectCase">Select Case</option>
                    {/* Add more options as needed */}
                </select>
                <button id="guide6">Guide 6</button>
            </div>

            <div className="form-group">
                <label htmlFor="wasteManagementOthers">Waste Management of Others:</label>
                <select id="wasteManagementOthers">
                    <option value="selectCase">Select Case</option>
                    {/* Add more options as needed */}
                </select>
                <button id="guide7">Guide 7</button>
            </div>

            <div className="form-group" id="waste-info-section">
                <label htmlFor="wasteInfo">Waste Management Information (if yes):</label>
                <textarea
                    id="wasteInfo"
                    rows="4"
                    placeholder="Enter the information"
                    value={wasteInfo}
                    onChange={(e) => setWasteInfo(e.target.value)}
                ></textarea>
            </div>


            {/* Navigation Footer */}
            <footer>
                <button onClick={() => navigate('/dashboard/tab3')}>Back</button>
                <button onClick={() => navigate('/dashboard/tab5')}>Next</button>
                <button onClick={openGuide}>Guide 4</button>
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

export default Tab4;
