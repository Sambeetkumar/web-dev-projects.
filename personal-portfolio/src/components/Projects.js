import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Omni Food",
      description: "Food Delivery",
      imgUrl: projImg1,
      link: "https://sambeetkumar.github.io/Omni-Food/",
    },
    {
      title: "Sambeet",
      description: "Personal Portfolio",
      imgUrl: projImg2,
      link: "",
    },
    {
      title: "Pricing Panel",
      description: "Payment Page",
      imgUrl: projImg3,
      link: "https://github.com/Sambeetkumar/Web-Development/tree/master/114%20PricingPanel-CODE/PricingPanel/PriceTableStarter",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I am an enthusiastic, self-motivated, reliable, responsible
                    and hard working person. I am a mature team worker and
                    adaptable to all challenging situations. I am able to work
                    well both in a team environment as well as using own
                    initiative. I am able to work well under pressure and adhere
                    to strict deadlines.Do checkout some of my projects listed below.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills my-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second"></Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
