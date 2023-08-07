import React from "react";
import "./spanBold.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function SpanBold({text}){

    const isBlack = useSelector(state => state.black.isBlack);

    return(

        <span className={isBlack === false ? "spanBold" : "spanBold active"}>{text}</span>
    )
}