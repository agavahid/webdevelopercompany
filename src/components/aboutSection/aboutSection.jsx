import React from "react";
import "./aboutSection.css";
import myPageImage from "../../assets/images/mainPageImg/websitePhoto.jpeg";
import exmppdf from "../../assets/docs/Lebenslauf-Vahid-Habibullayev.pdf";
import H1Center from "../textElements/h1Center/h1Center";
import PCenter from "../textElements/pCenter/pCenter";
import SpanBold from "../textElements/spanBold/spanBold";

export default function AboutSection(){


    return(
        
        <section className="aboutSectionContainer" id="About">
            <div className="aboutSectionHeader">
                <H1Center text={"Über Mich"}/>
                <PCenter text="Meine Einleitung"/>
            </div>
            
            <div className="aboutSectionBody">
                <div className="aboutSectionBodyLeft">
                    <img src={"https://t3.ftcdn.net/jpg/03/35/34/80/360_F_335348056_yY8QyHP966KePjyutnns1Puwt2bnngZc.jpg"} className="aboutSectionPageImg"/>
                </div>
                <div className="aboutSectionBodyRight">
                    <div className="aboutSectionBodyRightItem">
                        <PCenter text="Webentwickler mit umfassendem Wissen und langjähriger Erfahrung, der im Bereich Webtechnologien arbeitet und qualitativ hochwertige Arbeit liefert"/>
                    </div>
                    <div className="aboutSectionBodyRightItem">
                        <div className="aboutSectionBodyRightItemRowContainer">
                            <div className="aboutSectionBodyRightItemRow">  
                                <SpanBold text="2+"/>
                                <SpanBold text="Jahren Erfahrung"/>
                            </div>
                            <div className="aboutSectionBodyRightItemRow">
                                <SpanBold text="5+"/>
                                <SpanBold text="Fertige Projekte"/>
                            </div>
                        </div>
                    </div>
                    <div className="aboutSectionBodyRightItem">
                        <a className="contactMeButton" href={exmppdf} download="CV Vahid Habibullayev">Herunterladen CV</a>
                    </div>                    
                </div>
            </div>
        </section>
    )
}