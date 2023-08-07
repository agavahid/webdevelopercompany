import React from "react";
import "./pRegular.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PRegular({text}){

    const isBlack = useSelector(state => state.black.isBlack);

    return( 
        <p className={isBlack === false ? "mainPRegular" : "mainPRegular active"}>{text}</p>
    )
}