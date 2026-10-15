import React from "react";
import Navbar from "../components/Navbar";
import c1 from "./../assets/c1.png";
import c2 from "./../assets/c2.png";
import c3 from "./../assets/c3.png";

function Contact() {
  return (
    <div>
      <Navbar pname={"Contact"} colorLinkNavbar={"red"} />
      <div className="w-full flex flex-col justify-center items-center gap-20 pt-50">
        <span className="text-white text-6xl font-bold">Let's Talk</span>
        <span className="text-gray-400 text-3xl font-semibold">
          Don't be a stranger! Say Hello and let's collaborate
        </span>
        <div className="w-full flex justify-between  items-center pl-30 pr-30 pt-20">
          <div className="flex flex-col gap-3 items-center">
            <div>
              <img src={c1} alt="c1" className="w-40 h-40 object-contain" />
            </div>
            <div>
              <span className="text-gray-400 text-2xl font-semibold">
                s6619410031@sau.ac.th
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div>
              <img src={c2} alt="c2" className="w-40 h-40 object-contain" />
            </div>
            <div>
              <span className="text-gray-400 text-2xl font-semibold">
                Thailand, Bangkok
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div>
              <img src={c3} alt="c3" className="w-40 h-40 object-contain" />
            </div>
            <div>
              <span className="text-gray-400 text-2xl font-semibold">
                Thitipong SAU
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
