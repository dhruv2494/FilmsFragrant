import React, { useContext } from "react";
import { user } from "../App";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
const Sidebar = () => {
  const profile = useContext(user);
  return (
    <h1
      hidden
      id="udetail"
      className=" md:w-1/5 w-3/5 text-white h-screen sticky top-11 lpage pt-5 bg-gray-800"
    >
      <div className=" flex justify-center text-center flex-col">
        <h1 className="text-xl">
          <AccountCircleIcon />
        </h1>
        <h1 className="text-4xl mt-3">{profile.profile.userName}</h1>
        <h3 className="mt-5">
          <CallIcon /> <span>{profile.profile.mobile}</span>
        </h3>
        <Link to={"/"}>
          <button className="w-full h-11 bg-gray-900 mt-2">Home</button>
        </Link>
        <Link to={"/Addmovie"}>
          <button className="w-full h-11 bg-gray-900 mt-2">
            <AddIcon color="secondary" />
            <span>Add New</span>
          </button>
        </Link>
        <Link to={"/user/wishlist"}>
          <button className=" w-full h-11 bg-gray-900 mt-2">WishList</button>
        </Link>
        <button
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
          className=" w-full h-11 bg-gray-900 mt-2"
        >
          Log Out
        </button>
      </div>
    </h1>
  );
};

export default Sidebar;
