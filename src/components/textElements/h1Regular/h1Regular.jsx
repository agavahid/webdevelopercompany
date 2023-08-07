import React from "react";
import "./h1Regular.css";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function H1Regular({text}){

    const isBlack = useSelector(state => state.black.isBlack);
    return(
        <h1 className={isBlack === false ? "mainh1Regular" : "mainh1Regular active"}>{text}</h1>
    )
}