import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { user } from "../App";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  const profile = useContext(user);
  return (
    <div className="text-blue-500 h-11 z-30 sticky top-0 bg-[#0C1A1A] text-3xl flex justify-between items-center font-bold p-3 border-b-2 border-gray-500">
      
      {profile.profile.mobile == "" ? (
        <Link to={"/login"}>
          <span className=" rounded-md flex items-center text-3xl">
            <Button>
              <span className="text-white ">Login</span>
            </Button>
          </span>
        </Link>
      ) : (
        <span className="text-green-600 flex items-center text-3xl">
          <Button
            onClick={() => {
              document.getElementById("udetail").hidden =
                !document.getElementById("udetail").hidden;
            }}
          >
            <AccountCircleIcon />
          </Button>
        </span>
      )}<Link to={"/"}>
      <span>
        hello
        <span className="text-white text-xl">
          {" "}
          <i>{profile.profile.mobile != "" ? `${profile.profile.userName}` : ""}</i>
        </span>
      </span>
    </Link>
    </div>
  );
};
export default Header;
