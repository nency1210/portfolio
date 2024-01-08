import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
    <a href="#" className="footer__logo">
      Nency Patel
    </a>
    
    <div className="footer__links">
      <a href="#">Home</a> |{' '}
      <a href="#about">About</a> |{' '}
      <a href="#experience">Experience</a> |{' '}
      <a href="#skills">Skills</a> |{' '}
      <a href="#portfolio">Portfolio</a> |{' '}
      <a href="#contact">Contact</a>
    </div><br/><br/>    
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/nencyben-patel-933581179/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/nency1210">
        <FaGithub />
      </a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Nency Patel. All rights reserved</small>
    </div>
  </footer>
  );
};

export default Footer;
