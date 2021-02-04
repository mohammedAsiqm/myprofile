import React from "react";
import { Fade } from "react-reveal";
import Image from "../Assets/Image/mypic.png";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import mail from "react-useanimations/lib/mail";
import UseAnimations from "react-useanimations";

function About(props) {
  const GITHUB_LINK = "https://github.com/mohammedAsiqm";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/mohammedasiqm/";
  const GMAILID = "mohammedasiq152@gmail.com";
  const INSTAGRAM = "https://instagram.com/mohammed_asiq_?igshid=15mg1j4xqybwd";

  return (
    <div className={"about"} id={"about-section"}>
      <Fade top duration={2700}>
        <div className={"about-title-wrapper"}>
          <h2 className={"about-title"}>About Me</h2>
          <div className={"titel-border"}></div>
        </div>
      </Fade>

      <div className={"about-inner-content"}>
        <div className={"about-inner-content-text"}>
          <Fade right duration={2500}>
            <h4>
              Hi! &nbsp; I'm from chennai.&nbsp; I did my UG at "The New
              College" (Autonomous) in royapettah. &nbsp; I completed my SSLC &
              HSC with 75% above at St.Gabriel's Hr Sec School in
              broadway.&nbsp; I'm a MERN stack developer.&nbsp; I would like to
              share my learning experiences with you.&nbsp; I have been learning
              web development languages for 1 year.&nbsp; I started to learn
              these stuff's during my 2nd year of UG. &nbsp; I did a lot of
              beginner projects such as Tic Tac, Todo app, small frontend
              websites etc in my learning period.&nbsp; I gained good
              experiences from that.&nbsp; After learnt these basic languages,
              I've started to learn frameworks.&nbsp;I have chosen React
              framework.&nbsp;
              <br />
              <br />
              Let's talk about my react journey.&nbsp; At the beginning stage, I
              suffered to understand the basics of react.&nbsp;Because no one
              taught me and i don't have good guidance for my career.&nbsp; But
              i never retracted.&nbsp; Now today, I built this portfolio using
              react js.&nbsp; I learnt mern stack languages by myself.&nbsp; So,
              I'm a self learner and motivated person.
            </h4>
          </Fade>

          <div className={"about-icon-wrapper"}>
            <a href={GITHUB_LINK} target="blank">
              <Fade top duration={2500}>
                <UseAnimations
                  animation={github}
                  size={30}
                  strokeColor={"#fb7592"}
                  wrapperStyle={{
                    cursor: "pointer",
                    paddingRight: "5vh",
                  }}
                />
              </Fade>
            </a>

            <a href={LINKEDIN_LINK} target="blank">
              <Fade left duration={2500}>
                <UseAnimations
                  animation={linkedin}
                  size={30}
                  strokeColor={"#fb7592"}
                  wrapperStyle={{
                    cursor: "pointer",
                    paddingRight: "5vh",
                  }}
                />
              </Fade>
            </a>
            <a href={INSTAGRAM} target="blank">
              <Fade right duration={2500}>
                <UseAnimations
                  animation={instagram}
                  size={30}
                  strokeColor={"#fb7592"}
                  wrapperStyle={{
                    cursor: "pointer",
                    paddingRight: "5vh",
                  }}
                />
              </Fade>
            </a>
            <a href={`mailto:${GMAILID}`} target="blank">
              <Fade bottom duration={2500}>
                <UseAnimations
                  animation={mail}
                  size={30}
                  strokeColor={"#fb7592"}
                  wrapperStyle={{
                    cursor: "pointer",
                  }}
                />
              </Fade>
            </a>
          </div>
        </div>

        <div>
          <Fade left duration={2500}>
            <img className={"about-img"} src={Image} alt={"no pic found"} />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
