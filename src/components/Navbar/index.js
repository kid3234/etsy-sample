import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

function Navbar() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileView = windowDimensions.width <= 768;

  return (
    <div className="shadow w-full h-fit flex flex-col gap-2 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isMobileView ? <MenuOpenOutlinedIcon fontSize="large" /> : ""}
          <p className="text-[#f43] font-bold text-3xl">Etsy</p>
          {isMobileView ? (
            ""
          ) : (
            <div className="flex gap-2 items-center text-gray-700">
              <MenuIcon fontSize="medium" />
              <p>Categories</p>
            </div>
          )}
        </div>

        {isMobileView ? (
          <>
           <div className="flex items-center mx-4 w-[35%] p-2 rounded-full border border-slate-400 relative flex-grow">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full pl-4 pr-12 py-2 text-sm rounded-full outline-none"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#f43] p-2 rounded-full cursor-pointer transition-all hover:bg-[#f55]">
              <SearchOutlinedIcon sx={{ color: "white" }} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
           
            <PersonOutlineOutlinedIcon fontSize="large" />
            <CardGiftcardIcon fontSize="large"/>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </div>
          
          </>
        ) : (
          <div className="flex items-center w-[35%] p-2 mx-4 rounded-full border border-slate-400 relative flex-grow">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full pl-4 pr-12 py-2 text-sm rounded-full outline-none"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#f43] p-2 rounded-full cursor-pointer transition-all hover:bg-[#f55]">
              <SearchOutlinedIcon sx={{ color: "white" }} />
            </div>
          </div>
        )}

        {!isMobileView && (
          <div className="flex gap-4 items-center text-gray-700">
            <p className="cursor-pointer">Sign in</p>
            <FavoriteBorderIcon fontSize="medium" />
            <CardGiftcardIcon fontSize="medium" />
            <ShoppingCartOutlinedIcon fontSize="medium" />
          </div>
        )}
      </div>

      {!isMobileView && (
        <div className="flex items-center justify-start gap-4 text-sm text-gray-600 m-auto">
          <div className="flex items-center gap-2">
            <CardGiftcardIcon fontSize="small" />
            <p>Gift Mode</p>
          </div>
          <p>Back-to-School Savings</p>
          <p>Home Favorites</p>
          <p>Fashion Finds</p>
          <p>Registry</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
