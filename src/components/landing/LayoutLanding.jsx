import React from "react";
import LandingNavbar from "./LandingNavbar";


const LayoutLanding = ({ children }) => (
  <div className="bg-primary overflow-hidden">
    <div className="w-full shadow-lg bg-secondary">
      <div className="container mx-auto">
        <LandingNavbar></LandingNavbar>
      </div>
    </div>
    <div className="w-full bg-secondary">
      
    </div>
    <div className="w-full border-secondary">{children}</div>
    
  </div>
);

export default LayoutLanding;
