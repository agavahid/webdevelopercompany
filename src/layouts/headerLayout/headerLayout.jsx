import React from "react";
import './headerLayout.css';
import HeaderNavBar from "../../components/headerNavBar/headerNavBar";




export default function HeaderLayout(){
    return(
        <header className="headerLayout">
            <HeaderNavBar/>
        </header>
    )
}