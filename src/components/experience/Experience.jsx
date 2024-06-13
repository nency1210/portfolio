import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>

      {/* Full Stack Developer at Semper8 */}
      <div className="work-experience__item">
        <div className="work-experience__pointer"></div>
        <h3>Full Stack Developer</h3>
        <h4>Semper8, Toronto, ON</h4>
        <p>May 2023 - May 2024</p>
        <ul>
          <li> Established cross-functional design strategies, resulting in a 15% increase in project efficiency and a 10% reduction in development time.</li>
<li>Designed user-centered, aesthetically pleasing digital interfaces that increased user engagement by 20%.</li>
<li>Enhanced the visual appeal and interaction of the user interface, contributing to a 25% increase in user satisfaction scores.</li>
<li>Created effective APIs using Python, improving communication between front-end programs and back-end systems by 30%.</li>
<li>Managed SQL databases to ensure data integrity, effective retrieval, and secure storage, leading to a 40% improvement in overall system performance and reliability.</li>

        </ul>
      </div>

      {/* Software Developer at Triveni Global Software Services LLP */}
      <div className="work-experience__item">
        <div className="work-experience__pointer"></div>
        <h3>Software Developer</h3>
        <h4>Triveni Global Software Services LLP, India</h4>
        <p>Aug 2021 – Mar 2022</p>
        <ul>
          <li> • Integrated RESTful APIs, enhancing site responsiveness and cross-device functionality, resulting in a 35% increase in user retention.</li>
<li>Developed dynamic web applications using React and Java, leading to a 20% faster page load time and a 15% increase in user engagement.</li>
<li>Made data-driven decisions based on user feedback and site performance, improving user experience metrics by 25%.</li>
<li>Collaborated with a diverse team to implement client-specific solutions, contributing to a 10% increase in customer satisfaction.</li>
<li>Implemented rigorous testing protocols using Selenium, reducing bug occurrence by 30% and ensuring the delivery of high-quality, error-free code.</li>
<li>Contributed to rapid feature releases and continual enhancements, improving the product development cycle by 20%.</li>

        </ul>
      </div>
    </section>
  );
};

export default Experience;
