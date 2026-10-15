import React from "react";
import Navbar from "../components/Navbar";
import img1 from "./../assets/img1.png";

export default function About() {
  return (
    <div>
      <Navbar pname={"About"} colorLinkNavbar={"yellow"} />
      
      <div className="w-full flex justify-between items-start pl-50 pr-50 pt-50 ">
        {/* ส่วนของเนื้อหาด้านซ้าย */}
        <div className="flex flex-col gap-15 justify-around items-center">
          <span className="text-white font-bold text-6xl">About Me</span>
          <div>
            <img src={img1} alt="About Me" className="w-60 h-auto" />
          </div>
        </div>

        {/* ส่วนของเนื้อหาด้านขวา */}
        <div className="flex flex-col gap-6 max-w-xl ">
          <div>
            <span className="text-white text-2xl font-bold leading-relaxed">
              Hi, I'm Thitipong SAU. A passionate Full Stack Web Developer based in Thailand.
            </span>
          </div>

          <span className="text-gray-400 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem
            odit labore unde nemo omnis sequi hic sit laudantium repellendus
            recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis
            consequuntur velit nesciunt aperiam odit excepturi repellat libero in
            enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
            voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit
            autem deserunt asperiores vitae ea, libero sed! Libero fugit non,
            placeat nulla quae odio asperiores ratione! Accusamus placeat
            dolorem minus eos excepturi modi.
          </span>
        </div>
      </div>
      {/* ส่วนของปุ่มด้านล่าง */}
      <div className="flex justify-center pt-20 ">
            <button className="border border-white text-white px-10 py-5 rounded-full text-3xl font-medium">
              Download CV
            </button>
          </div>
    </div>
  );
}