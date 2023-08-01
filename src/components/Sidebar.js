import React, { useContext } from "react";
import { user } from "../App";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
const Sidebar = () => {
  const profile = useContext(user);
  const Navigate = useNavigate();
  return (
    <h1
      hidden
      id="udetail"
      className="w-full text-white z-40 absolute h-screen sticky top-11 lpage pt-5 bg-[#121212]"
    >
      <div className=" flex text-lg justify-start text-start flex-col">
        <div
          onClick={() => {
            Navigate("/");
            document.getElementById("udetail").hidden =
              !document.getElementById("udetail").hidden;
          }}
          className="w-full hover:bg-black mt-5"
        >
          <h3 className="m-5 text-3xl">Home</h3>
        </div>
        <div
          onClick={() => {
            Navigate("/addmovie");
            document.getElementById("udetail").hidden =
              !document.getElementById("udetail").hidden;
          }}
          className="w-full hover:bg-black mt-5"
        >
          <h3 className="m-5 text-3xl">Add New Movie</h3>
        </div>
        <div
          onClick={() => {
            Navigate("/user/wishlist");
            document.getElementById("udetail").hidden =
              !document.getElementById("udetail").hidden;
          }}
          className="w-full hover:bg-black mt-5"
        >
          <h3 className="m-5 text-3xl">WishList</h3>
        </div>
        <div
          onClick={() => {
            profile.SetProfile({
              userName: "",
              mobile: "",
              password: "",
              userid: "",
            });
            document.getElementById("udetail").hidden =
              !document.getElementById("udetail").hidden;
          }}
          className="w-full hover:bg-black mt-5"
        >
          <h3 className="m-5 text-3xl">Log out</h3>
        </div>
      </div>
    </h1>
  );
};

export default Sidebar;
