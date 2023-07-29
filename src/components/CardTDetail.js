import React from "react";
import ReactStars from "react-stars";
const CardTDetail = (h) => {
  return (
    <div className="">
      {/*  */}
      <div
        onMouseEnter={() => {
          document.getElementById("thidden").hidden = false;
        }}
        onMouseLeave={() => {
          document.getElementById("thidden").hidden = true;
        }}
        className="w-full flex flex-row justify-center items-center"
      >
        <img
          className=" h-80 w-1/2 md:w-auto  md:max-w-4/5 pt-5 m-5"
          src={h.h.img}
          alt="img not found"
        />
        <div className="pl-3  flex flex-col items-start h-96 w-1/2">
          <div className="mt-11 w-full">
            <h1 className="text-4xl">
              {h.h.title} <span className="text-2xl">({h.h.year})</span>
            </h1>
            <ReactStars
              className="w-full"
              value={h.h.rating}
              half={true}
              edit={false}
              size={55}
            />
          </div>
          <h4 id="thidden" className="w-full text-center md:mt-11 text-xl h-11">
            Tap To More Info
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardTDetail;
