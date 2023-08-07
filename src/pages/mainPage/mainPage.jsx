import React from "react";
import "./mainPage.css";
import Skills from "../../components/skills/skills";
import HomeSection from "../../components/homeSection/homeSection";
import AboutSection from "../../components/aboutSection/aboutSection";
import Services from "../../components/services/services";
import Portofilo from "../../components/portofilo/portofilo";
import Contact from "../../components/contact/contact";

export default function MainPage(){
    return(
        <div className="mainPage">
            <HomeSection/>
            <AboutSection/>
            <Skills/>
            <Services/>
            <Portofilo/>
            <Contact/>
        </div>
    )
}