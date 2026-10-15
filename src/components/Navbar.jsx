import React from "react";

export default function Navbar({ pname, colorLinkNavbar }) {
  return (
    <div>
      {" "}
      {/* ส่วนของเมนู */}
      <div className="w-full flex justify-between items-center pr-20 pl-20 pt-5 pb-5 ">
        <div className="">
          {/* โลโก้และชื่อเว็บด้านซ้าย */}
          <span className="text-[#00FF90] text-3xl font-bold">{">_"}</span>
          <span className="text-white text-3xl font-bold">
            {"Thitipong SAU"}
          </span>
        </div>
        <div className="flex gap-10 text-lg font-semibold items-center">
          {/* เมนูด้านขวา */}
          <a
            href="/"
            className="text-white"
            style={{ color: pname == "Home" ? colorLinkNavbar : "white" }}
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white"
            style={{ color: pname == "About" ? colorLinkNavbar : "white" }}
          >
            About
          </a>
          <a
            href="/portfolio"
            className="text-white"
            style={{ color: pname == "Portfolio" ? colorLinkNavbar : "white" }}
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className="text-white border-2 border-white px-3 py-1 rounded-2xl "
            style={{ color: pname == "Contact" ? colorLinkNavbar : "white" }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}
