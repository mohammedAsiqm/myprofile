import React from "react";
import Img from "../Assets/Image/home1.svg";
import { Fade } from "react-reveal";

function Home(props) {
  const MOBILE_NO = "+91 7397341330";

  return (
    <div className={"home"} id={"home"}>
      <div className={"homeText"}>
        <Fade left duration={2000}>
          <h3>Hello, I am</h3>
          <h1>Mohammed Asiq M</h1>
          <h3 className={"home-h3-intro"}>
            I am a MERN stack developer. I'm aspiring to build web application
            from scratch by using react js. If you're looking for a web
            developer to build websites for your buisness or startups, feel free
            to contact me.
          </h3>
        </Fade>
        <Fade bottom duration={2500}>
          <a href={`tel: ${MOBILE_NO} `}>
            <button className={"home-contact-button"}>Contact Me</button>
          </a>
        </Fade>
      </div>
      <div>
        <Fade right duration={2000}>
          <img
            className={"home-img"}
            src={Img}
            width={"400vh"}
            alt="no pic found"
          />
        </Fade>
      </div>
    </div>
  );
}

export default Home;
