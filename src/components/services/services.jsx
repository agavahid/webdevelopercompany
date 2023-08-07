import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./services.css";
import { services } from "../serviceItems/serviceItems";
import closeIcon from "../../assets/icons/pageIcons/mainPageIcons/close.png";
import doneIcon from "../../assets/icons/pageIcons/mainPageIcons/done.png";
import H1Center from "../textElements/h1Center/h1Center";
import PCenter from "../textElements/pCenter/pCenter";
import SpanRegular from "../textElements/spanRegular/spanRegular";


export default function Services(){

    const isBlack = useSelector(state => state.black.isBlack);
    const [value, setValue] = useState(10);
    function submenuActive(index) {
        index === value ? setValue(10) 
        :
        setValue(index)
    }

    return(
        <section className="services" id="Services">
            <div className="servicesHeader">
                <H1Center text="Dienstleistungen"/>
                <PCenter text="Was Ich Anbiete"/>
            </div>
        
            <div className="servicesContainer">
                
                {
                    services.map((item, index) => 
                        <div className={isBlack === false ? "servicesContent" : "servicesContent active"} key={index}>
                            <div className="servicesContentHeader">
                                <img src={item.photo} className="servicesContentImg"/>
                                <SpanRegular text={item.header}/>
                            </div>
                            
                            <div className="servicesContentMoreInfo">
                                
                                <p onClick={()=> submenuActive(index)} className="servicesViewMore">View More</p>
                                <div className={value === index ? "servicesContentShadow active" : "servicesContentShadow"}></div>
                                <div className={value === index ? "servicesContentSubmenu active" : "servicesContentSubmenu"}>
                                
                                    <div className="serviceSubmenuHeader">
                                        <h2>{item.header}</h2>
                                        <img src={closeIcon} className="serviceCloseIcon" onClick={()=> submenuActive(index)}/>
                                    </div>
                                    
                                    <ul className="serviceSubmenuList">
                                        {
                                            item.descriptions.map((description, index) => 
                                                <li key={index} className="serviceSubmenuListItem"><img src={doneIcon} className="servicesDoneIcon"/> <span>{description.describe}</span></li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        
                        
                            
                            
                        </div>
                    )
                }

            </div>
        </section>
    )
}