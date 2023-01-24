import { Col, Container, Row } from 'react-bootstrap'

import logo from "../assets/img/CHAO.svg"
import navIcon1 from "../assets/img/github.svg"
import navIcon2 from "../assets/img/linkedin.svg"

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <img src={logo} alt={logo}></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/Chao-Ma5566" target="_blank"><img src={navIcon1} alt="Mon Github" /></a>
                            <a href="https://www.linkedin.com/in/jianchao-ma-8144b3140" target="_blank"><img src={navIcon2} alt="Mon Linkedin" /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}