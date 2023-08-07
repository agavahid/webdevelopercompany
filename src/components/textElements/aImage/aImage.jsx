import React from "react";
import "./aImage.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function AImage({text, href, image}){

    const isBlack = useSelector(state => state.black.isBlack);

    return(
        <a href={href} target="_blank">
            <img src={image} className="AImageImg" />
        </a>
    )
}