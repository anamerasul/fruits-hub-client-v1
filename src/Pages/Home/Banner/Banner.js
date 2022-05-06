import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
  const array = [1, 3, 5, 6];
  return (
    <div className="relative">
      <div className="h-[80vh] w-[100vw] bg-yellow-200 ">
        <Swiper className="mySwiper">
          {/* <SwiperSlide className="bg-yellow-300">
            <img
              className="w-25 h-25 bg-yellow-300"
              src="https://i.ibb.co/4Zbryfc/notfoundpage-1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-25 h-25 bg-yellow-300"
              src="https://i.ibb.co/4Zbryfc/notfoundpage-1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-25 h-25 bg-yellow-300"
              src="https://i.ibb.co/4Zbryfc/notfoundpage-1.png"
              alt=""
            />
          </SwiperSlide> */}

          {array.map((arr) => (
            <SwiperSlide className="bg-yellow-300">
              <img
                className="w-25 h-25 bg-yellow-300"
                src="https://i.ibb.co/4Zbryfc/notfoundpage-1.png"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="h-[60vh] sm:h-[30vh] absolute top-5 left-10 mt-10 sm:top-16 sm:left-20 z-50 sm:mt-24 flex flex-col justify-between items-between">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black text-green-700">
            Welcome to fruits hub
          </h2>
        </div>

        <div>
          <Link
            to="/manageinventory"
            className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
          >
            Manage inventory
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
