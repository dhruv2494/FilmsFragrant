import React, { useEffect, useState, useContext } from "react";
import { getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import { Moviedata } from "../firebase/Firebase";
import CardTDetail from "./CardTDetail";
const Cards = () => {
  const Navigate = useNavigate();
  const [data, Setdata] = useState([]);
  const [load, SetLoad] = useState(false);
  const [simg, setsimg] = useState({});
  useEffect(() => {
    async function getdata() {
      SetLoad(true);
      const _data = await getDocs(Moviedata);
      _data.forEach((doc) => {
        Setdata((p) => [...p, { ...doc.data(), id: doc.id }]);
      });
      SetLoad(false);
    }
    getdata();
  }, []);
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex w-full  flex-wrap justify-between p-3 mt-2 text-white">
        {load ? (
          <div className="w-full flex justify-center items-center min-h-screen pb-8">
            {" "}
            <Puff color="white" />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-h-96 flex justify-center">
              <div
                id="cimgh"
                className="flex justify-center w-4/5 md:w-1/2 h-96 rounded-xl bg-gray-900 items-center"
              >
                <Link to={`details/${simg.id}`}>
                  <CardTDetail h={simg} />
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-center">
              {data.map((e, i) => {
                return (
                  <div className="mx-2">
                    <div
                      onClick={() => {
                        setsimg(e);
                        document.getElementById("cimgh").style.display =
                          "block";
                      }}
                      onDoubleClick={() => {
                        Navigate(`details/${e.id}`);
                      }}
                      key={i}
                      className="card w-40 bg-gray-900 font-medium transition-all duration-500 shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6"
                    >
                      <img
                        className=" h-60 w-40 md:h-72"
                        src={e.img}
                        alt="img not found"
                      />
                      <h1>{e.title}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
