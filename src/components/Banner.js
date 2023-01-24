import "animate.css"

import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from 'react-on-screen'
import chevronDown from "../assets/img/chevron-double-down.svg"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [textNum, setTextNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const toRotate = [ "Designer", "Développeur Web" ,"Designer reconverti en <Développeur web>." ] 
    const [text, setText] = useState("")
    const [delta,setDelta]=useState(300-Math.random() * 30)
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = textNum;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updateText === fullText && textNum !== toRotate.length - 1) {
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updateText === "") {
            setIsDeleting(false)
            setTextNum(textNum+1)
            setDelta(10 * toRotate[textNum].length)
        }else if (!isDeleting && updateText === fullText && textNum === toRotate.length - 1){
            setIsShow(true)
        }
    }

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                
                <Col xs={12} md={12} xl={10}>
                    <TrackVisibility>
                    {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Bienvenue au portfolio de Jianchao MA</span>
                        <h1>{`Je suis un `}<br></br><div><span className="wrap">{text}|</span></div></h1>
                        <a href="#contact" className="contactFlash">Contact<ArrowRightCircle size={25} /></a>
                    </div>}
                    </TrackVisibility>
                </Col>
            </Row>
            <Row className="align-items-center arrow">
                    {isShow && <img src={chevronDown} alt="chevron Down" className="arrow-down"/>}
            </Row>
        </Container>

        </section>
    )
}