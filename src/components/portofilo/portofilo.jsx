import React from "react";
import "./portofilo.css";
import { portofiloItems } from "../portofiloItems/portofiloItems";
import arrowRight from "../../assets/icons/pageIcons/mainPageIcons/arrowRight.png";
import doubleRight from "../../assets/icons/pageIcons/mainPageIcons/doubleRight.png";                                                                           
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import { useSelector } from "react-redux/es/hooks/useSelector";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import H1Center from "../textElements/h1Center/h1Center";
import H1Regular from "../textElements/h1Regular/h1Regular";
import SpanRegular from "../textElements/spanRegular/spanRegular";
import PCenter from "../textElements/pCenter/pCenter";


export default function Portofilo(){
    
    const isBlack = useSelector(state => state.black.isBlack);



    return(

        <section className="portofiloContainer" id="Portofilo">

            <div className="portofiloHeader">
                <H1Center text="Portofilo"/>
                <PCenter text="Neueste Arbeit"/>
            </div>
            
            <Swiper
                
                modules={[Navigation, Pagination, Scrollbar]}
                breakpoints={{
                769: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                1000: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }
                }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation
            >
            
            {
                portofiloItems.map((item, index) => 
                <SwiperSlide key={index} className="mySwiperSlider">
                    
                    <div className="portofiloItemContainer">

                        <div className="portofiloItemLeft">
                            <img src={item.image} className="portofiloMainImg"/>
                        </div>
                        <div className="portofiloItemRight">
                            <H1Regular text={item.header}/>
                            <SpanRegular text={item.desctiption}/>
                            <a href={item.link} target="_blank" className="portofiloLinkItem"><span>Demo</span> <img src={arrowRight}/></a>
                        </div>
                    </div>
                    
                </SwiperSlide>
                )
            }
            
            </Swiper>
            
            <div className={isBlack === false ? "portofiloBottom" : "portofiloBottom active"}>
                <div className="portofiloBottomItemContainer">
                    <div className="portofiloBottomLeft">
                        <h1>Du hast ein neues Projekt</h1>
                        <p>Kontaktieren Sie mich jetzt und erhalten Sie 30 % Rabatt auf Ihr neues Projekt</p>
                        <a href="#ContactMe" className="portofiloContactLink"> <span>Contact Me</span> <img src={doubleRight} className="doubleRightIcon"/></a>
                    </div>
                    <div className="portofilobottomRight">
                        <img src={"https://t4.ftcdn.net/jpg/02/00/09/67/360_F_200096743_fQYT1CUqF7XEPwl8ppEEErpd8FFRopTK.jpg"} className="portofiloPageImg"/>
                    </div>
                </div>
            </div>

        </section>

    )
}