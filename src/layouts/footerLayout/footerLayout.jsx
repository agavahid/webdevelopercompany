import React from "react";
import './footerLayout.css';
import fb from "../../assets/icons/pageIcons/mainPageIcons/facebook.png";
import inst from "../../assets/icons/pageIcons/mainPageIcons/instagram.png";
import twtt from "../../assets/icons/pageIcons/mainPageIcons/twitter.png";
import H1Cursive from "../../components/textElements/h1Cursive/h1Cursive";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function FooterLayout(){

    const isBlack = useSelector(state => state.black.isBlack);

    return(
        <footer className={isBlack === false ? "footerLayout" : "footerLayout active"}>
            <div className="footerLayoutContainer">
                <div className="footerLeft">
                    <H1Cursive text="Vahid"/>
                    <span>Fullstack Developer</span>
                </div>
                <div className="footerMiddle">
                    <a href="#Services" className="footerMiddleContent">Services</a>
                    <a href="#Portofilo" className="footerMiddleContent">Portofilo</a>
                    <a href="#ContactMe" className="footerMiddleContent">Contact Me</a>
                </div>
                <div className="footerRight">
                    <a href="" className="footerRightContent"><img src={fb}/></a>
                    <a href="https://www.instagram.com/hv.aga/?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="footerRightContent"><img src={inst}/></a>
                    <a href="#ContactMe" className="footerRightContent"><img src={twtt}/></a>
                </div>
            </div>
        </footer>
    )
}