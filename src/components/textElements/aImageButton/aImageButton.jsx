import React from "react";
import "./aImageButton.css";



export default function AImageButton({text, image, href}){




    return(
        <a className="aHrefButton" href={href}>{text}
            <img src={image} className="aHrefImg" />
        </a>
    )
}