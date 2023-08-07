import React, { useEffect } from "react";
import './mainLayout.css';
import HeaderLayout from "../headerLayout/headerLayout";
import FooterLayout from "../footerLayout/footerLayout";
import { useDispatch } from "react-redux";
import { setBlackMode } from "../../store/features/isBlackValue/blackState";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function MainLayout({children}){
    
    const isBlack = useSelector(state => state.black.isBlack);
    
    

    return(
        <div className={isBlack === false ? "mainLayout" : "mainLayout active"}>
            <HeaderLayout/>
                {children}
            <FooterLayout/>
        </div>
    )
}