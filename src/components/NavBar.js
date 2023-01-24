import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

import logo from "../assets/img/CHAO.svg"
import logoBlack from "../assets/img/logoblack.svg"
import navIcon1 from "../assets/img/github.svg"
import navIcon2 from "../assets/img/linkedin.svg"

export const NavBar = () =>{
    const [onLink, setOnLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateLink = (value) => setOnLink(value);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={scrolled ? logo : logoBlack} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={onLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={onLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink("skills")}>Compétences</Nav.Link>
            <Nav.Link href="#projects" className={onLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink("projects")}>Projets</Nav.Link>
            <Nav.Link href="../assets/CV-MA-Jianchao.pdf" className="navbar-link" rel="Télécharger Mon CV" download>MonCV</Nav.Link>
            <a href="CV-MA-Jianchao.pdf" id="download" download="CV MARSHALL Isaac Développeur web.pdf">Téléchargez</a>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/Chao-Ma5566" target="_blank"><img src={navIcon1} alt="Mon Github" /></a>
                <a href="https://www.linkedin.com/in/jianchao-ma-8144b3140" target="_blank"><img src={navIcon2} alt="Mon Linkedin" /></a>
            </div>
            <a className="contactButton" href="#contact"><span>Contact</span> </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
