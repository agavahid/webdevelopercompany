import React,{ useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contactForm.css";
import rightArrow from "../../assets/icons/pageIcons/mainPageIcons/double-right-white.png";


export default function ContactForm(){
  

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    
    
    emailjs.sendForm('agavahid', 'template_nbyt80m', e.target, 'UE9qGU-FNYLqX2f9e')
        .then((result) => {
            alert("Ihre Nachricht wurde erfolgreich gesendet");
        }, (error) => {
            console.log(error.text);
        });

    e.target.reset()
    };
    
    return(

        <div className="contactFormContainer">
            <form  onSubmit={sendEmail}>
                <div className="formItemsTop">
                    <div className="formItem">
                        <input type="text" name="name" className="formItemInputSmall"/>
                        <span className="formItemSpan">Name</span>
                    </div>
                    <div className="formItem">
                        <input type="email" name="email" className="formItemInputSmall"/>
                        <span className="formItemSpan">Email</span>
                    </div>
                </div>
                <div className="formItemsBottom">
                    <div className="formItem">
                        <input type="text" name="subject" className="formItemInputNormal"/>
                        <span className="formItemSpan">Subject</span>
                    </div>
                    <div className="formItem">
                        <textarea name="message" className="formItemInputLarge"/>
                        <span className="formItemSpan">Message</span>
                    </div>
                    <div className="formItemSubmit">
                        <input type="submit" value="Senden" className="formSubmitInput"/>
                        <img src={rightArrow} className="formSubmitRightArrow" />
                    </div>
                    
                </div>
            </form>
                
        </div>

    )
}



