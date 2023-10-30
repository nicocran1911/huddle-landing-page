import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

export default function Register() {
  return (
    <div className="w-ful h-full p-9 overflow-hidden">
      <h1 className="lg:text-5xl lg:w-5/6 font-bold text-white lg:mt-20 text-xl text-center lg:text-left -mt-5 ">
        {" "}
        Build The Community Your Fans Will Love
      </h1>
      <p className="text-white mt-5 text-center text-sm lg:mt-10 lg:w-9/12 lg:text-left">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discusion.
      </p>
      <div className="text-center lg:text-left">
        <button className="bg-white lg:p-3 rounded-3xl text-sm p-2 w-44 text-center lg:w-58 shadow-2xl font-bold text-violet-500 hover:bg-pink-400 hover:text-white mt-10">
          Register
        </button>
      </div>
      <div className="grid justify-items-center">
        <div className="flex justify-between w-28 lg:mt-40 mt-20 lg:ml-96">
          <div className=" w-8 h-8 border-2 rounded-full flex justify-center items-center text-white hover:cursor-pointer hover:border-pink-400 hover:text-pink-400">
            <BiLogoFacebook />
          </div>
          <div className=" w-8 h-8 border-2 rounded-full flex justify-center items-center text-white hover:cursor-pointer hover:border-pink-400 hover:text-pink-400">
            <BiLogoTwitter />
          </div>
          <div className=" w-8 h-8 border-2 rounded-full flex justify-center items-center text-white hover:cursor-pointer hover:border-pink-400 hover:text-pink-400">
            <BiLogoInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
