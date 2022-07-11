import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { getRandomNum } from "../data/Calculator";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styled from "../../styles/card_carousel.module.css";


// import required modules
import { EffectCards } from "swiper";

export default function App({ data, identifier }) {
    console.log("CardCarousel");
    console.log(data);
    const color = ['#f89b00', `#81c147`, '#5e7e9b', '#c0c0c0', '#bfff00 ', ' #ff3399', '#83dcb7', '#3e91b5', '#ffd700', '#ff6347']


    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={styled.swiper}
                style={{ marginTop: "50px" }}
            >
                {identifier === '네티즌' ? data.netizenReple.map((item, index) => (
                    <SwiperSlide style={{ backgroundColor: `${color[index]}`, boxShadow: "0px 1px 10px black", }} key={index}>
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', boxSizing: 'border-box', padding: '10px' }}>
                            <div style={{ marginBottom: '10px' }}>
                                <h3 style={{ margin: 0 }}>{identifier}</h3>
                                <span style={{ fontSize: '14px', color: '#004444', textShadow: '0px 0px 15px #fff' }}>{data.netizenId[index]}</span>
                            </div>
                            <div style={{ fontSize: "15px" }}>{item}</div>
                        </div>
                    </SwiperSlide>
                )) : data.starReple.map((item, index) => (
                    <SwiperSlide style={{ backgroundColor: `${color[index]}`, boxShadow: "0px 1px 10px black", }} key={index}>
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', boxSizing: 'border-box', padding: '10px' }}>
                            <div style={{ marginBottom: '10px' }}>
                                <h3 style={{ margin: 0 }}>{identifier}</h3>
                                <span style={{ fontSize: '14px', color: '#004444', textShadow: '0px 0px 15px #fff' }}>{data.starId[index]}</span>
                            </div>
                            <div style={{ fontSize: "15px" }}>{item}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
