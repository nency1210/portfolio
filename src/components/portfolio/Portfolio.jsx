import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Grocsite.jpeg";
import IMG2 from "../../assets/hotair.jpeg";
import IMG3 from "../../assets/zoom.png";
import IMG4 from "../../assets/uwin.jpeg";
import IMG5 from "../../assets/shopping.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Flutter |Grocsite - Grocery management system",
    github: "https://github.com/nency1210/grocsite",
    brief:
      "https://github.com/nency1210/grocsite/tree/main#readme",
  },
  {
    id: 2,
    image: IMG2,
    title: "PyCharm | Python | Event booking",
    github: "https://github.com/nency1210/event_booking",
    brief: "https://github.com/nency1210/event_booking/tree/main#readme",
  },
  {
    id: 3,
    image: IMG3,
    title: "React | Node | Zoom meeting schedular",
    github: "https://github.com/nency1210/Web-Platform",

    brief:
      "https://github.com/nency1210/Web-Platform/tree/main#readme",
  },
  {
    id: 4,
    image: IMG4,
    title: "University Student Management System",
    github: "https://github.com/AbdulAhadKhan/UWin-Success-Frontend",
    
    brief: "https://github.com/AbdulAhadKhan/UWin-Success-Frontend#readme",
  },
  {
    id: 5,
    image: IMG5,
    title: "JavaScript | HTML | Shopping cart APIs",
    github: "https://github.com/nency1210/Shopping-Cart-API",
    brief: "https://github.com/nency1210/Shopping-Cart-API#readme",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
