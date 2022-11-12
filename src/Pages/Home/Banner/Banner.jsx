import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import banner from "../../../assets/images/hero-banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner h-[50vh] md:h-[50vh] lg:h-[89.5vh]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold italic">
              Get Your New <br /> Book Collections
            </h1>
            <hr className="w-20 h-1 md:h-2 bg-secondary border-0 rounded-full my-4" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some formr.
            </p>
            <button className="border hover:bg-btnBg delay-100 px-8 md:px-16 py-4 rounded-full mt-4 font-semibold flex ">
              Shop Now{" "}
              <span>
                <ShoppingBagIcon className="w-5 h-5 ml-1" />
              </span>
            </button>
          </div>
          <div className="h-[85%] mx-auto">
            <img className="h-full" src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
