import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Programs.css";
import program_1 from "../../assets/program_1.jpg";
import program_2 from "../../assets/program_2.jpg";
import program_3 from "../../assets/program_3.jpg";
import program_4 from "../../assets/program_4.jpg";
import program_5 from "../../assets/program_5.jpg";

const Program = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleProgramClick = (programId) => {
    setSelectedProgram(programId === selectedProgram ? null : programId);
  };

  const handleButtonClick = (programName) => {
    navigate(`/details/${programName.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    
    <div className="programs">
      <div className={`program ${selectedProgram === 1 ? "active" : ""}`} onClick={() => handleProgramClick(1)}>
        <img src={program_1} alt="" />
        {selectedProgram === 1 && (
          <div className="overlay">
            <h3>Money Bouquet</h3>
            <button onClick={() => handleButtonClick("Money Bouquet")}>View Details</button>
          </div>
        )}
      </div>

      <div className={`program ${selectedProgram === 2 ? "active" : ""}`} onClick={() => handleProgramClick(2)}>
        <img src={program_2} alt="" />
        {selectedProgram === 2 && (
          <div className="overlay">
            <h3>Valentines Package</h3>
            <button onClick={() => handleButtonClick("Valentines Package")}>View Details</button>
          </div>
        )}
      </div>

      <div className={`program ${selectedProgram === 3 ? "active" : ""}`} onClick={() => handleProgramClick(3)}>
        <img src={program_3} alt="" />
        {selectedProgram === 3 && (
          <div className="overlay">
            <h3>Money Treat</h3>
            <button onClick={() => handleButtonClick("Money Treat")}>View Details</button>
          </div>
        )}
      </div>

      <div className={`program ${selectedProgram === 4 ? "active" : ""}`} onClick={() => handleProgramClick(4)}>
        <img src={program_4} alt="" />
        {selectedProgram === 4 && (
          <div className="overlay">
            <h3>For Him</h3>
            <button onClick={() => handleButtonClick("For Him")}>View Details</button>
          </div>
        )}
      </div>

      <div className={`program ${selectedProgram === 5 ? "active" : ""}`} onClick={() => handleProgramClick(5)}>
        <img src={program_5} alt="" />
        {selectedProgram === 5 && (
          <div className="overlay">
            <h3>Chocolate Treat</h3>
            <button onClick={() => handleButtonClick("Chocolate Treat")}>View Details</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Program;
