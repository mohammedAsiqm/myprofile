import React, { useState } from "react";
import { Flip, Slide } from "react-reveal";
import Logo from "../Assets/Image/mypic.png";
import MenuBarIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Style = {
  fontSize: "40px",
  margin: "10px 10px 0px 0px",
  color: "aqua",
  cursor: "pointer",
};

function Header(props) {
  const [Checked, setChecked] = useState(false);
  const [classname, setClassname] = useState("inner-header");
  const [headername, setheadername] = useState("header");

  const OpenCloseMenuHandler = () => {
    setChecked(!Checked);

    if (!Checked) {
      setClassname("inner-header  inner-header-open  ");
      setheadername("header header-open");
    } else {
      setClassname("inner-header inner-header-close ");
      setheadername("header");
    }
  };

  return (
    <div className={headername} id={"header"}>
      <div className={"logo-wrapper"}>
        <Slide left duration={2000}>
          <img src={Logo} alt={"not found"} className={"logo"} />
        </Slide>
      </div>

      <div className={classname}>
        <Flip>
          <ul>
            <li>
              <a href={"#home"} onClick={OpenCloseMenuHandler}>
                Home
              </a>
            </li>
            <li>
              <a href={"#about-section"} onClick={OpenCloseMenuHandler}>
                About
              </a>
            </li>
            <li>
              <a href={"#skills"} onClick={OpenCloseMenuHandler}>
                Skills
              </a>
            </li>
            <li>
              <a href={"#works"} onClick={OpenCloseMenuHandler}>
                Works
              </a>
            </li>
            <li>
              <a href={"#contact"} onClick={OpenCloseMenuHandler}>
                Contact
              </a>
            </li>
          </ul>
        </Flip>
      </div>
      <Slide right duration={2000}>
        <div className={"menubar-icon"} id={"menubar"}>
          {Checked === false ? (
            <MenuBarIcon onClick={OpenCloseMenuHandler} style={Style} />
          ) : (
            <CloseIcon onClick={OpenCloseMenuHandler} style={Style} />
          )}
        </div>
      </Slide>
    </div>
  );
}

export default Header;
