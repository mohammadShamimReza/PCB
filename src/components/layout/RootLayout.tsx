import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface RootLayoutProps {
  children: React.ReactNode; // Use ReactNode type for children prop
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0 50px" }}>
        <div className="min-h-screen">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
