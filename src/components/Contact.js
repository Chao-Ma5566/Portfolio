import "animate.css"

import { Col, Container, Row } from "react-bootstrap";

import TrackVisibility from 'react-on-screen'
import contactImg from "../assets/img/contact-img.svg"
import { useState } from "react";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Valider");
    const [state, setState] = useState({})
    
    const onFormUpdate = (type, value) => {
        setFormDetails({
            ...formDetails,
            [type]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("En train d'envoyer...")
        let response = await fetch("http://localhost:5000/contact", {
            method:"POST",
            header: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Envoyé");
        let result = response.json()
        setFormDetails(formInitialDetails);
        if(result.code===200){
            setState({ success: true, message: "Votre message est bien envoyé!"})
        }else {
            setState({ success: false, message: "Erreur, merci d'essayer plus tard"})
        }
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-content-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contactez nous"></img>
                    </Col>
                    <Col md={6}>
                    <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Contactez</h2>
                        </div>}
                    </TrackVisibility>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Votre nom" onChange={(e)=> onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Votre prénom" onChange={(e)=> onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Votre email" onChange={(e)=> onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Votre téléphone" onChange={(e)=> onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Laissez votre message ici" onChange={(e)=> onFormUpdate("message", e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {state.message && 
                                <Col>
                                    <p className={state.success === false ? "danger" : "success"}>{state.message}</p>
                                </Col>}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}