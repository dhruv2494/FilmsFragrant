import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { user } from "../App";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import HeaderComponents from "./HeaderComponents";
const Header = () => {
  const profile = useContext(user);
  return (
    <div className="text-white h-[60px] z-30 sticky top-0 bg-[#121212] text-3xl flex justify-between items-center font-bold p-3 border-b-2 border-gray-500">
      {profile.profile.mobile == "" ? (
        <Link className="w-full" to={"/login"}>
          <div className="  w-full flex justify-end text-3xl">
            <button className="rounded-md bg-gray-900 hover:bg-orange-400 text-center items-center justify-center flex">
              <span className="text-white text-xl m-2">Login</span>
              {/* <span className="text-orange-500 ">Login</span> */}
            </button>
          </div>
        </Link>
      ) : (
        <div className="w-full flex flex-row">
          <div
            className="md:hidden"
            onClick={() => {
              document.getElementById("udetail").hidden =
                !document.getElementById("udetail").hidden;
            }}
          >
            <ViewHeadlineIcon />
          </div>
          <div className="w-full hidden md:block">
            <HeaderComponents />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
