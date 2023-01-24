import "animate.css"

import { Col, Container, Nav, Row, Tab } from "react-bootstrap"

import { ProjectCard } from "./ProjectCard"
import TrackVisibility from 'react-on-screen'
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Projects = () => {
    const projects = [
        {
            title: "QSG",
            describe: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "QSG",
            describe: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "QSG",
            describe: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "QSG",
            describe: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "QSG",
            describe: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "QSG",
            describe: "Design & Development",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <h2>Projets</h2>
                            <p>v lorem lorem lorem lorem</p>
                        </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-content-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background color sharp"/>
        </section>
    )
}