// Tab3.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Modal/Modal'; // Adjust the import path according to your project structure
import './tab3.css';

const Tab3 = () => {
  const navigate = useNavigate();
  const [numRows, setNumRows] = useState(0);
  const [showTables, setShowTables] = useState(false); // To control visibility of tables
  const [showModal, setShowModal] = useState(false);

  const generateChemicalTables = () => {
    if (numRows > 0) {
      setShowTables(true);
    } else {
      alert('Please enter a valid number of rows.');
      setShowTables(false); // Hide the tables if the input is invalid
    }
  };

  const createTable = (title, headers, inputTypes, ...dropdownOptions) => {
    return (
      <table className="chemical-table">
        {/* Table title */}
        <thead>
          <tr>
            <th colSpan={headers.length}>
              <h3>{title}</h3>
            </th>
          </tr>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {inputTypes.map((type, colIndex) => (
                <td key={colIndex}>
                  {type === 'input' ? (
                    <input type="text" />
                  ) : (
                    <select>
                      {/* Use different options for each dropdown based on the column index */}
                      {dropdownOptions[colIndex - 1]?.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  const openGuide = () => setShowModal(true);
  const closeGuide = () => setShowModal(false);

  return (
    <div>
      <h3>Chemicals/Reagents/Solvents/Gas Used</h3>

      {/* Input, Label, and Button in Same Row */}
      <div className="input-row">
        <label htmlFor="numRows">Number of Chemicals/Reagents/Solvents Used:</label>
        <input
          type="number"
          id="numRows"
          min="1"
          placeholder="Enter number of rows"
          value={numRows}
          onChange={(e) => setNumRows(e.target.value)}
        />
        <button onClick={generateChemicalTables}>Generate Tables</button>
      </div>

      {/* Table Sections: Hidden until the user enters a valid number */}
      {showTables && (
        <div className="table-section">
          {createTable(
            'NFPA Health',
            ['Name', 'NFPA Health Value', 'in %'],
            ['input', 'dropdown', 'input'],
            ['0','1', '2', '3', '4']
          )}
          {createTable(
            'NFPA Flammability',
            ['Name', 'NFPA Flammability Value', 'in %'],
            ['input', 'dropdown', 'input'],
            ['0','1', '2', '3', '4']
          )}
          {createTable(
            'Physical Hazard',
            ['Name', 'Physical Hazard', 'Signal Word'],
            ['input', 'dropdown', 'dropdown'],
            ['N/A','W','OX','SA'],
            ['not mentioned','caution','warning','Danger']
          )}
         
        </div>
      )}


      {/* Navigation Footer */}
      <footer>
        <button onClick={() => navigate('/dashboard/tab2')}>Back</button>
        <button onClick={() => navigate('/dashboard/tab4')}>Next</button>
        <button onClick={openGuide}>Guide 3</button>
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

export default Tab3;
