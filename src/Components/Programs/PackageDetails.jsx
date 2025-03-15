import React from "react";
import { useParams } from "react-router-dom";
import "./PackageDetails.css";

const PackageDetails = () => {
  const { programName } = useParams();

  return (
    <div className="package-details">
      <h1>{programName.replace("-", " ")}</h1>
      <p>
        Explore our exclusive {programName.replace("-", " ")} package. We offer the best services to make your event memorable!
      </p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default PackageDetails;
