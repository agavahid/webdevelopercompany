import "./h1Cursive.css"
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function H1Cursive({text}){
    const isBlack = useSelector(state => state.black.isBlack);
    return(
        <h1 className={isBlack === false ? "mainh1Cursive" : "mainh1Cursive active"}>{text}</h1>
    )
}