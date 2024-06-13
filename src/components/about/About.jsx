import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Nency image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                2 Years + Software Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
              Masters in Applied Computing, B.Sc. Information and Technology
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                5+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <div>
          <p>
          Hey, I'm Nencyben Patel, a tech enthusiast with a knack for problem-solving. 
          Armed with a Master's in Applied Computing, I've delved into the intricate world of C, Java, and Python, bringing almost 2 Years of dynamic software development experience.
                            </p>
          <p>
          My journey includes impactful roles at Semper8, where I played a key part in designing user-centric interfaces and delving into JavaScript frontend development. 
          I've also been part of groundbreaking projects like Uwin Connect and Gro Sense, demonstrating my commitment to innovative and impactful solutions.
                     </p>
          <p>
          Beyond coding, I'm passionate about collaborative projects. 
          My ventures include Uwin Connect, a platform fostering student communication, and Gro Sense, a sustainable Grocery Management System. 
          Let's connect and explore the endless possibilities of tech together!
</p></div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
