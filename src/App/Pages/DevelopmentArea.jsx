import React from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function DevelopmentArea() {
  return (
    <>
      <Header />
      <div className="h-screen sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200"/>
      <Footer />
    </>
  );
}

export default DevelopmentArea;
