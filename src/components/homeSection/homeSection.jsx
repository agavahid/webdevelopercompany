import React from "react";
import './homeSection.css';
import gitIcon from "../../assets/icons/pageIcons/mainPageIcons/gitIcon.png";
import linkedInIcon from "../../assets/icons/pageIcons/mainPageIcons/linkedinIcon.png";
import pageImg from "../../assets/images/mainPageImg/websitePhoto.jpeg";
import rightArrow from "../../assets/icons/pageIcons/mainPageIcons/rightarrow.png";
import H1Regular from "../textElements/h1Regular/h1Regular";
import AImage from "../textElements/aImage/aImage";
import AImageButton from "../textElements/aImageButton/aImageButton";
import PRegular from "../textElements/pRegular/pRegular";

export default function HomeSection(){


    return(
        <section className="homeSectionContainer"> 
            <div className="homeSection" id="Home">
                <nav className="homeSectionNav">
                    <AImage href={"https://github.com/agavahid"} image={gitIcon}/>
                    <AImage href={"https://www.linkedin.com/in/vahid-habibullayev/"} image={linkedInIcon}/>
                    
                </nav>
                <div className="homeSectionText">
                    <H1Regular text={"Hallo, ich bin Max"}/>
                    <PRegular text={"FullStack Developer"}/>
                    <PRegular text={"Umfangreiche Erfahrung im Webdesign und in der Entwicklung von Kenntnissen, die qualitativ hochwertige Arbeit leisten"}/>
                    <AImageButton text={"Contact Me"} href={"#ContactMe"} image={rightArrow}/>
                </div>
                <div className="homeSectionImg">
                    <img src={"https://t3.ftcdn.net/jpg/03/35/34/80/360_F_335348056_yY8QyHP966KePjyutnns1Puwt2bnngZc.jpg"} className="myPageImage" alt=""/>
                </div>
            </div>
        </section>
    )
}