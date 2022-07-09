import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { Pagination } from "swiper";

export default function App({ data }) {
    const item = data;
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                slidesPerView={6}
                spaceBetween={0}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ display: "flex", flex: "1", flexDirection: "column", alignItems: "center" }}>
                            <div className="swiper-inner-box" style={{ background: `url(${data[index].img}) center no-repeat`, backgroundSize: "cover" }}>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "column", fontSize: "14px" }}>
                                <span>{data[index].name}</span>
                                <div>
                                    <span>{data[index].position}</span>
                                    <span>{data[index].role === "" ? "" : ` | ${data[index].role}`}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
