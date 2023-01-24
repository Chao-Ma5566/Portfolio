import "react-multi-carousel/lib/styles.css"
import "animate.css"

import { Col, Container, Row } from "react-bootstrap"

import Carousel from "react-multi-carousel"
import Illustration from "../assets/img/art-numerique.png"
import { SkillCard } from "./SkillCard.js"
import TrackVisibility from 'react-on-screen'
import colorSharp from "../assets/img/color-sharp.png"
import designThinking from "../assets/img/cerveau.png"
import rendu from "../assets/img/modelisation-3d.png"
import web from "../assets/img/developpement-web.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const skillsList = [
        {
            img: designThinking,
            title: "Design thinking",
            descrip: "Penser au l'identité, visibilité, accessibilité et ergonomie."
        },{
            img: web,
            title: "Web Développement",
            descrip: "Full stack React + Node, écris des codes propres, réutilisables et efficaces."
        },{
            img: Illustration,
            title: "Illustration",
            descrip: "Créer des icons ou retouche photo."
        },{
            img: rendu,
            title: "Maquette 3D et Rendu",
            descrip: "Photomontage 3D de produit ou d'architecture. Envie d'apprendre Three.js"
        },
    ]  

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <h2>
                                Compétences
                            </h2>
                            <p>Design + &#60;Code&#62; = Expérience Unique </p>
                            
                            </div>}
                    </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {skillsList.map((info)=>{
                                    return <SkillCard arr={info} />
                                })}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background color"></img>
            <div className="tools-logo"></div>
        </section>
        
      )
      
}