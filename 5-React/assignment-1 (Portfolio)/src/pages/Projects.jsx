import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import todo from "../assets/projects/to-do-app.png";
import tomato from "../assets/projects/tomato.png";
import travel from "../assets/projects/travel-site.png";
import portfolio from "../assets/projects/portfolio.png";
import foodious from "../assets/projects/foodious.png";
import amazon from "../assets/projects/amazon-clone.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do App"
              description="This project features a responsive interface built with Reactjs and CSS. Users can easily add, delete, and update tasks in the To-Do list. The backend is covered with local storage."
              ghLink="https://github.com/Umair6085/To-Do-App"
              demoLink="https://to-do-app-muy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This project is about the portfolio of me. The portfolio is built with HTML and CSS. It also has a responsive design. The portfolio contains links to my github and linkedin. The portfolio is also responsive and can be viewed on any device."
              ghLink="https://github.com/Umair6085/Simple-Portfolio"
              demoLink="https://muy-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Website"
              description="This website is about the travel the world. It has the sleek design and offers good visuals. It is made with HTML and CSS. The website is responsive and can be viewed on any device."
              ghLink="https://github.com/Umair6085/Travel-Website"
              demoLink="https://travel-site-muy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodious}
              isBlog={false}
              title="Food Website"
              description="The Foodious website allows you to go thorugh the categories of food which is offered by the company. THe company has a lot of food varities on menu. This is made in HTML and CSS. The website is responsive and can be viewed on any device."
              ghLink="https://github.com/Umair6085/Foodious"
              demoLink="https://foodious.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomato}
              isBlog={false}
              title="Food Ordering App"
              description="The Food Ordering App where you can order any type of food wihch is available on your door step in few minutes. You can go through categories like pure veg, deserts,pasta and much more. This is made in React using Vite JS which is fully responsive according any device."
              ghLink="https://github.com/Umair6085/Tomato-Food-App"
              demoLink="https://tomato-food-app-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="The Amazon clone where you can view products . This is made in HTML, CSS and Bootstrap. The website is responsive and can be viewed on any device.The Amazon clone where you can view products . This is made in HTML, CSS and Bootstrap."
              ghLink="https://github.com/Umair6085/Amazon-Clone"
              demoLink="https://amazon-clone-one-muy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects