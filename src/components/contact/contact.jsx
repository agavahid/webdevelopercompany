import React from "react";
import './contact.css';
import ContactForm from "../contactForm/contactForm";
import { contactItems } from "../contactItems/contactItems";
import H1Center from "../textElements/h1Center/h1Center";
import PCenter from "../textElements/pCenter/pCenter";
import H1Regular from "../textElements/h1Regular/h1Regular";
import PRegular from "../textElements/pRegular/pRegular";

export default function Contact(){

    return(

        <section className="contactContainer" id="ContactMe">
            <div className="contactHeader">
                <H1Center text="Kontakt"/>
                <PCenter text="In Kontakt Setzen"/>
            </div>
            <div className="contactBody">
                <div className="contactBodyLeft">
                    {
                        contactItems.map((item, index) => 
                            <div className="contactBodyLeftContent" key={index}>
                                <div className="contactBodyLeftContentIcon">
                                    <img src={item.img} />
                                </div>
                                <div className="contactBodyLeftContentDescription">
                                    <H1Regular text={item.header}/>
                                    <PRegular text={item.describe}/>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="contactBodyRight">
                    <ContactForm/>
                </div>
            </div>
        </section>

        
    )
}