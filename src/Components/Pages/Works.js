import React from "react";
import { Fade } from "react-reveal";
import work1 from "../Assets/Image/work1.png";
import work2 from "../Assets/Image/work2.png";

const WorkCard = (props) => {
  return (
    <div className={"works-workcard-title"}>
      <div>
        <img src={props.img} alt={"no pic found"} />
      </div>
      <div
        style={{
          backgroundColor: "#34495E",
          padding: "5vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "8px",
            color: "#FF5733",
          }}
        >
          {props.title}
        </h2>
        <h4>{props.description}</h4>
        <br hidden={props.space} />
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className={"works-workcard-button"}
        >
          <a href={props.websitelink} target={"blank"}>
            <button className={"work-button"}>Show Website</button>
          </a>
          <a href={props.githublink} target={"blank"}>
            <button className={"work-button"}>Show Src Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

function Works(props) {
  return (
    <div className={"works"} id={"works"}>
      <Fade top duration={2000}>
        <div>
          <h2 className={"works-title"}>Works</h2>
          <div className={"works-border"}></div>
        </div>
      </Fade>

      <Fade left duration={2000}>
        <div className={"works-card-container"}>
          <WorkCard
            img={work1}
            title={"Food Website"}
            websitelink={"https://asiqreactproject.netlify.app/"}
            githublink={"https://github.com/mohammedAsiqm/FoodOnlineWebsite"}
            space={false}
            description={`It is a frontend food website project. It was built using html5, css3
              , react js.`}
          />

          <WorkCard
            img={work2}
            title={"Portfolio "}
            websitelink={"/"}
            githublink={"/"}
            space={true}
            description={`It is an animated portfolio website. It was built using html5, css3
              , react js and react-reveal library.`}
          />
        </div>
      </Fade>
    </div>
  );
}

export default Works;
