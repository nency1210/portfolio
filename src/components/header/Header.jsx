import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/header-picture2.jpeg";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nency Patel</h1>
        <h5 className="text-light">Web developer | Application Developer | UI/UX Designer | Database Master </h5>
        <CTA />
        <HeaderSocials />
        <div className="nency">
          <img src={header_picture} alt=" Nency Patel" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
