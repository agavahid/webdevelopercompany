import React from "react";
import "./spanRegular.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function SpanRegular({text}){

    const isBlack = useSelector(state => state.black.isBlack);

    return(

        <span className={isBlack === false ? "spanRegular" : "spanRegular active"}>{text}</span>
    )
}