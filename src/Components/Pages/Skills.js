import React from "react";
import { Fade } from "react-reveal";
import skill_svg from "../Assets/Image/skills.svg";
import html from "../Assets/Image/html.png";
import css from "../Assets/Image/css.png";
import js from "../Assets/Image/js.png";
import reactjs from "../Assets/Image/react.png";
import mongo from "../Assets/Image/mongodb.png";
import node from "../Assets/Image/node.png";
import express from "../Assets/Image/express.png";
import material from "../Assets/Image/material.png";
import git from "../Assets/Image/git.png";

const SkillsLanguage = (props) => {
  return (
    <div
      style={{ display: "inline-block", padding: "5vh" }}
      className={"skill-lang-anim"}
    >
      <img
        src={props.src}
        alt={"no pic found"}
        width={props.width || "35vh"}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <h3>{props.title}</h3>
    </div>
  );
};

function Skills(props) {
  return (
    <div className={"skills"} id={"skills"}>
      <Fade top duration={2000}>
        <div>
          <h2 className={"skills-title"}>Skills</h2>
          <div className={"skills-border"}></div>
        </div>
      </Fade>

      <div className={"skills-content-wrapper"}>
        <div className={"skills-language"}>
          <Fade left duration={2500}>
            <div>
              <h2>Front end</h2>
              <div className={"skills-skillLang-img"}>
                <SkillsLanguage title={"Html5"} src={html} />
                <SkillsLanguage title={"Css3"} src={css} />
                <SkillsLanguage title={"JavaScript"} src={js} />
                <SkillsLanguage title={"React"} src={reactjs} width={"50vh"} />
                <SkillsLanguage
                  title={"Material ui"}
                  src={material}
                  width={"50vh"}
                />
              </div>
            </div>
          </Fade>
          <Fade left duration={2500}>
            <div>
              <h2>Back end</h2>
              <div className={"skills-skillLang-img"}>
                <SkillsLanguage title={"Node js"} src={node} width={"70vh"} />
                <SkillsLanguage
                  title={"Express"}
                  src={express}
                  width={"45vh"}
                />
                <SkillsLanguage title={"Mongodb"} src={mongo} />
              </div>
            </div>
          </Fade>
          <Fade left duration={2500}>
            <div>
              <h2>Others</h2>
              <div className={"skills-skillLang-img"}>
                <SkillsLanguage
                  title={"Git & Github"}
                  src={git}
                  width={"75vh"}
                />
              </div>
            </div>
          </Fade>
        </div>

        <Fade right duration={2500}>
          <div>
            <img
              src={skill_svg}
              alt={"no pic found"}
              className={"skills-img"}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
