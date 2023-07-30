import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import Review from "./Review";
const Details = () => {
  const [load, Setload] = useState(false);
  const [data, Setdata] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getdata() {
      Setload(true);
      const _d = doc(db, "movie", id);
      const _data = await getDoc(_d);
      Setdata(_data.data());
      Setload(false);
    }
    document.getElementById("title").innerHTML = data.title;
    getdata();
  }, []);
  return (
    <div>
      {load ? (
        <div className="w-full items-center pb-8 min-h-screen flex justify-center">
          <Puff color="white" />
        </div>
      ) : (
        <div
          id="hii"
          className="text-white top-1/4 -z-10 p-4 mt-4 flex w-full flex-col md:flex-row justify-center"
        >
          <div className="md:min-h-96 md:w-96 md:max-h-screen flex img md:float-right justify-center items-center text-center overflow-scroll  md:sticky -z-10 md:top-11">
            <img
              className="md:h-full h-4/5 w-4/5 md:w-full"
              src={data.img}
              alt="img not found"
            />
          </div>
          <div className="w-full md:w-2/5">
            <div className="ml-4 w-full -z-20">
              <h1 className="text-6xl text-gray-300">
                {data.title} <span className="text-4xl">({data.year})</span>
              </h1>
              <ReactStars
                className="-z-10"
                prevreating={data.rating}
                rated={data.ratingcount}
                value={data.rating}
                half={true}
                edit={true}
                size={20}
              />
              <p className="w-full md:DetailDiscription text-center overflow-scroll">
                {data.description}
              </p>
            </div>
            <div>
              <Review
                id={id}
                rating={data.rating}
                ratingcount={data.ratingcount}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
