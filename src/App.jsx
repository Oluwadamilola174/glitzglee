import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from "./Components/Programs/Programs";
import PackageDetails from "./Components/Programs/PackageDetails";
import MoneyBouquetPage from "./Components/Programs/MoneyBouquetPage";

const AppContent = () => {
  const location = useLocation(); // To get current route

  // Condition to hide Hero and Programs on Package Details or Money Bouquet page
  const hideOnDetailsPage = location.pathname.includes("/details") || location.pathname === "/details/money-bouquet";
    // Hide Navbar only on the Money Bouquet page
    const hideNavbar = location.pathname === "/details/money-bouquet";
  return (
    <>
      {!hideNavbar && <Navbar />}
      
      {!hideOnDetailsPage && <Hero />}
      <Routes>
        <Route path="/" element={<Programs />} />
        <Route path="/details/:programName" element={<PackageDetails />} />
        <Route path="/details/money-bouquet" element={<MoneyBouquetPage />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
