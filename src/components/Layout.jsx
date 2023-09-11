import React from "react";
import { Navbar, Footer } from ".";

const LayoutFixed = ({ children }) => (
  <div className="bg-primary overflow-hidden">
    <div className="fixed top-0 left-0 right-0 z-50 w-full shadow-lg bg-primary">
      <div className="container mx-auto">
        <Navbar />
      </div>
    </div>
    <div className="container mx-auto mb-16"></div>
    <div className="w-full border-secondary mb-16">{children}</div>
    <div className="bg-footer border-t-2 border-secondary">
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  </div>
);

export default LayoutFixed;
