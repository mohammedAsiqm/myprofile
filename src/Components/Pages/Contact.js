import React from "react";
import { Bounce } from "react-reveal";
import mail from "react-useanimations/lib/mail";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import UseAnimations from "react-useanimations";
import { Fade } from "react-reveal";

function Contact(props) {
  const GMAILID = "mohammedasiq152@gmail.com";
  const MOBILE_NO = "+91 7397341330";
  const GITHUB_LINK = "https://github.com/mohammedAsiqm";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/mohammedasiqm/";
  const INSTAGRAM = "https://instagram.com/mohammed_asiq_?igshid=15mg1j4xqybwd";

  return (
    <div className={"contact"} id={"contact"}>
      <Bounce top duration={1500}>
        <div>
          <h2 className={"contact-title"}>GET IN TOUCH</h2>
          <div className={"contact-border"}></div>
        </div>
      </Bounce>

      <Fade bottom duration={2000}>
        <div className={"contact-content"}>
          <h3>
            If you have any questions or looking developer for your business,
          </h3>
          <h3> Contact me without hesitation. I love to help you. </h3>
        </div>
      </Fade>

      <Fade bottom duration={2000}>
        <div
          className={"contact-content"}
          style={{ marginTop: "1cm", marginBottom: "2cm" }}
        >
          <a href={`mailto:${GMAILID}`}>
            <UseAnimations
              animation={mail}
              size={40}
              strokeColor={"#fb7592"}
              wrapperStyle={{
                cursor: "pointer",
                display: "inline-flex",
              }}
            />
          </a>

          <h3> mohammedasiq152@gmail.com </h3>
        </div>
      </Fade>

      <Fade bottom duration={2000}>
        <div className={"contact-button-container"}>
          <a href={`tel: ${MOBILE_NO} `}>
            <button className={"home-contact-button contact-button "}>
              Contact Me
            </button>
          </a>
        </div>
      </Fade>

      <div className={"contact-icon"}>
        <a href={GITHUB_LINK} target="blank">
          <Fade bottom duration={2000}>
            <UseAnimations
              animation={github}
              size={30}
              strokeColor={"#fb7592"}
              wrapperStyle={{
                cursor: "pointer",
                marginRight: "10px",
              }}
            />
          </Fade>
        </a>

        <a href={LINKEDIN_LINK} target="blank">
          <Fade bottom duration={2500}>
            <UseAnimations
              animation={linkedin}
              size={30}
              strokeColor={"#fb7592"}
              wrapperStyle={{
                cursor: "pointer",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
          </Fade>
        </a>

        <a href={INSTAGRAM} target="blank">
          <Fade bottom duration={2500}>
            <UseAnimations
              animation={instagram}
              size={30}
              strokeColor={"#fb7592"}
              wrapperStyle={{
                cursor: "pointer",
                paddingRight: "5vh",
                marginLeft: "10px",
              }}
            />
          </Fade>
        </a>
      </div>

      <Fade bottom duration={2000}>
        <h4 className={"contact-developername"}>
          Site developed by "Mohammed asiq m"
        </h4>
      </Fade>
    </div>
  );
}

export default Contact;
