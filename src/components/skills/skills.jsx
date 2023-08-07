import React from "react";
import './skills.css';
import brackets from "../../assets/icons/pageIcons/mainPageIcons/brackets.png";
import arrowIcon from "../../assets/icons/pageIcons/mainPageIcons/arrowTopBlue.png";
import windowIcon from "../../assets/icons/pageIcons/mainPageIcons/windows.png";
import { skills } from "../skillItems/skillItems";
import { useState } from "react";
import H1Center from "../textElements/h1Center/h1Center";
import H1Regular from "../textElements/h1Regular/h1Regular";
import PCenter from "../textElements/pCenter/pCenter";
import SpanRegular from "../textElements/spanRegular/spanRegular";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Skills(){

    const [value, setValue] = useState(10);
    function setDropDown(key){
        key === value ? setValue(1000) :
        setValue(key)
        return "skillsBodyItemSubmenu active"
    }
    const isBlack = useSelector(state => state.black.isBlack);
    return(
        <section className="skillsContainer" id="Skills">
            <div className="skillsHeader">
                <H1Center text="Fähigkeiten"/>
                <PCenter text="Mein Technisches Niveau"/>
            </div>
            <div className="skillsBody">
                {
                    skills.map((item, index) => 
                   
                    <div className="skillsBodyItem" key={index} onClick={()=> setDropDown(index)}>
                        <div className="skillsBodyItemHeader" >
                            <div className="skillsBodyItemLeft">
                                <img src={index === 0 ? brackets : windowIcon} className="bracketsIcon"/>
                            </div>
                            <div className="skillsBodyItemMiddle">
                                <div className="skillsBodyItemMiddleTop">
                                    <H1Center text={item.skillName}/>
                                </div>
                                <div className="skillsBodyItemMiddleBottom">
                                    <PCenter text={item.skillProficy}/>
                                </div>
                            </div>
                            <div className="skillsBodyItemRight">
                                <img src={arrowIcon} alt="" className={value === index ? "skillsCardArrow active" : "skillsCardArrow"}/>
                            </div>
                        </div>
                        <div className={value === index ? "skillsBodyItemSubmenu active" : "skillsBodyItemSubmenu"}>
                            <ul>
                                {
                                    
                                    item.data.map((submenuItem, index) => 

                                        <div className="lineContainer"  key={index}> 
                                            <div className="lineTop">
                                                <div className="lineTopLeft">
                                                    <H1Regular text={submenuItem.skill}/>
                                                    
                                                </div>
                                                <div className="lineTopRight">
                                                    <SpanRegular text={submenuItem.percent+"%"}/>
                                                </div>
                                            </div>
                                            <div className={`lineBottom`}>
                                                <div className={`lineBottom${submenuItem.percent}`}></div>
                                            </div>
                                        </div>
                                        
                                    )
                                    
                                }
                            </ul>
                        </div>
                    </div>
                    )
                }


            </div>
        </section>
    )
}