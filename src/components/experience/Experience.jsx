import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>

      {/* Software Developer at Semper8 */}
      <div className="work-experience__item">
        <div className="work-experience__pointer"></div>
        <h3>Software Developer</h3>
        <h4>Semper8, Toronto, ON</h4>
        <p>May 2023 - Present</p>
        <ul>
          <li> • Worked closely with project objectives to establish cross-functional design strategies.</li>
          <li> • Utilized the most recent UI/UX techniques to design user-centered, aesthetically pleasing digital interfaces.</li>
          <li> • Performed JavaScript frontend development to enhance visual appeal and interaction.</li>
          <li> • Used Python to create effective APIs, enabling smooth communication between front-end and back-end systems.</li>
          <li> • Enhanced system performance and reliability through managed SQL databases.</li>
        </ul>
      </div>

      {/* Software Developer at Triveni Global Software Services LLP */}
      <div className="work-experience__item">
        <div className="work-experience__pointer"></div>
        <h3>Software Developer</h3>
        <h4>Triveni Global Software Services LLP, India</h4>
        <p>Aug 2021 – Mar 2022</p>
        <ul>
          <li> • Collaborated with the technical team to integrate RESTful APIs, enhancing site responsiveness and cross-device functionality.</li>
          <li> • Utilized React, Java, and cutting-edge technologies to develop dynamic web applications.</li>
          <li> • Made data-driven decisions based on user feedback and site performance.</li>
          <li> • Worked closely with a diverse team of engineers to conceptualize and implement solutions.</li>
          <li> • Implemented rigorous testing protocols using Selenium, ensuring the delivery of high-quality, error-free code.</li>
          <li> • Contributed to the rapid release of new features and continual enhancements to optimize the user experience in a dynamic, agile environment.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
