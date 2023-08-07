import React from "react";
import "./pCenter.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PCenter({text}){
    
    const isBlack = useSelector(state => state.black.isBlack);
    return(
        <p className={isBlack === false ? "mainPCenter" : "mainPCenter active"}>{text}</p>
    )
}