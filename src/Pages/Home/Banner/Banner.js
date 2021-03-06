import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import useBannerHooks from "../../../Hooks/useBannerHooks";
import Spinner from "./../../Shared/Spinner/Spinner";

const Banner = () => {
  const [banners] = useBannerHooks([]);
  // console.log(banners);
  return (
    <div className="relative bg-yellow-200">
      {banners.length === 0 ? (
        <Spinner></Spinner>
      ) : (
        <div className="h-[80vh] sm:h-[95vh] bg-yellow-200 ">
          <Swiper className="mySwiper">
            {banners.map((banner) => (
              <SwiperSlide key={banner._id} className="bg-yellow-300">
                <img className="w-25 bg-yellow-300" src={banner.image} alt="" />

                {/* <h2 className="text-4xl bg-yellow-200 sm:text-6xl font-black text-green-700 z-50">
                  Welcome to fruits hub
                </h2> */}

                <div className="h-[20vh] sm:h-[30vh] absolute top-5 left-10 mt-10 sm:top-16 sm:left-20 z-50 sm:mt-24 flex flex-col justify-between items-between">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className=" h-[20vh] sm:h-[30vh] absolute top-5 left-10 mt-10 sm:top-16 sm:left-20 z-50 sm:mt-24 flex flex-col justify-between items-between">
        <div>
          {/* <h2 className="text-4xl sm:text-6xl font-black text-green-700">
            Welcome to fruits hub
          </h2> */}
        </div>

        <div>
          {/* <Link
            to="/manageinventory"
            className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
          >
            Manage inventory
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
