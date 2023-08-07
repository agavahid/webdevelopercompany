import React, { useEffect, useState } from "react";
import './headerNavBar.css';
import { navBarContents } from "../headerNavBarContents/hederNavBarContents";
import { useDispatch } from "react-redux";
import { setBlackMode } from "../../store/features/isBlackValue/blackState";
import { useSelector } from "react-redux/es/hooks/useSelector";
import H1Cursive from "../textElements/h1Cursive/h1Cursive";
import ARegular from "../textElements/aRegular/aRegular";
import menuWhite from "../../assets/icons/layoutIcons/headerLayoutIcons/mobile-menu-white.png";
import menuBlack from "../../assets/icons/layoutIcons/headerLayoutIcons/mobile-menu-black.png";

export default function HeaderNavBar(){

    const isBlack = useSelector(state => state.black.isBlack);
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    function handleLight(){
        dispatch(setBlackMode())
    }
    function toggleMenu(){
        setActive(!isActive)
    }
    return(
        <div className="headerNavBarContainer">
            
            <H1Cursive text={'Max'}/> 
            <div className="headerNavBarRightContainer">
                <img src={isBlack === true ? menuWhite : menuBlack} className="headerNavBarMobileIcon" onClick={()=> toggleMenu()} />
                <nav className="headerNavBarNavigatiorContainer">
                    
                    <ul className={isActive === true ? "headerNavBarNavigatior" : "headerNavBarNavigatior deactive"}> 
                        {
                            navBarContents ? 
                                navBarContents.map((item, index) => 
                                    item.id !== 7 ?
                                    <li className="headerNavBarNavigatiorItem" key={index}>
                                        <ARegular text={item.name} />
                                    </li>
                                    : <img src={isBlack === false ? item.name : item.name1} className="turnLightsOff" key={index} onClick={()=> handleLight()}/>
                                )
                            : null
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}