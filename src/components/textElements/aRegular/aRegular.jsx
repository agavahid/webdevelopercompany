import "./aRegular.css";
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function ARegular({text}){

    const isBlack = useSelector(state => state.black.isBlack);
    return(

        <a className={isBlack === false ? "mainARegular" : "mainARegular active"} href={"#"+text}>{text}</a>
    )
}