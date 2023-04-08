import React from "react";
import { motion, useScroll } from "framer-motion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import NavBar from "./component/NavBarTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Introduction";
import { click } from "@testing-library/user-event/dist/click";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Fade,
  batch,
  Sticky,
  MoveOut,
  ZoomIn,
  FadeIn,
  Move,
  StickyIn,
} from "react-scroll-motion";
import Introduction from "./pages/Introduction";
import NavBarTop from "./component/NavBarTop";
import NavBarBottom from "./component/NavBarBottom";
import { User_data } from "./data/User_data";
import { Contacts_data } from "./data/Contacts_data";
import { Skills_data } from "./data/Skills_data";
import About_Me from "./pages/About_Me";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import { Education_data } from "./data/Education_data";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="frame-motion-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Nav Bar Top */}
      <NavBarTop textToBeDispalyed="Arvind Choudhary" imagePath="logo.jpg" />

      <div>
        <ScrollContainer>
          <Introduction />
          <About_Me />
          <Skills
            softSkills={Skills_data.softskills}
            hardSkills={Skills_data.hardSkills}
          />
          <Experience />
          <Education educationEntry={Education_data} />
        </ScrollContainer>
      </div>

      {/* Nav Bar Bottom */}
      <NavBarBottom
        authorName={User_data.authorName}
        linkedinUrl={Contacts_data.linkedinUrl}
        emailAdd={Contacts_data.emailAdd}
        githubUsername={Contacts_data.githubUsername}
        mediumUrl={Contacts_data.mediumUrl}
      />
    </>
  );
}

export default App;
