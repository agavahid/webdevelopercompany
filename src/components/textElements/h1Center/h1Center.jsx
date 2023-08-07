import "./h1Center.css"
import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function H1Center({text}){ 

    const isBlack = useSelector(state => state.black.isBlack);
    return(
        <h1 className={isBlack === false ? "mainH1Center" : "mainH1Center active"}>{text}</h1>
    )
}