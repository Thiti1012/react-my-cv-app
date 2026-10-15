import React from "react";
import Navbar from "../components/Navbar";
import img2 from "./../assets/img2.png";
import img3 from "./../assets/img3.png";
import img4 from "./../assets/img4.png";
import img5 from "./../assets/img5.png";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div>
      <Navbar pname={"Portfolio"} colorLinkNavbar={"yellow"} />
      {/* ส่วนหัวข้อ */}
      <div className="flex justify-center items-center pt-20 pb-20">
        <span className="text-white text-6xl font-bold">Portfolio</span>
      </div>

      <div className="w-full flex justify-between items-start pl-50 pr-50 gap-50">
        {/* ส่วนของเนื้อหาด้านซ้าย */}
        <div className="flex flex-col justify-center">
          <div>
            <img src={img2} alt="img2" className="w-150 h-100" />
          </div>
          <div className="flex flex-col justify-center max-w-xl pt-70">
            <div className="flex flex-col gap-6">
              <span className="text-white text-2xl font-bold text-center">
                Bikes and Beards
              </span>
              <span className="text-gray-400 text-xl leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt rem odit labore unde nemo omnis sequi hic sit
                laudantium repellendus recusandae vitae ea laborum, ipsa nisi
                eos autem. Blanditiis consequuntur velit nesciunt aperiam odit
                excepturi repellat libero in enim praesentium! Ex dicta est
                suscipit ipsam voluptate tempora voluptatum quam distinctio
                minus saepe nobis nulla amet fugiat sit autem deserunt
                asperiores vitae ea, libero sed! Libero fugit non.
              </span>
              <div className="flex justify-center gap-20">
                <button className="border border-white text-white px-10 py-2 rounded-full text-xl font-medium">
                  Viwe
                </button>
                <div className="flex  justify-center items-center gap-2">
                  <FaGithub className="text-white text-6xl border-2 border-black  rounded-full" />
                  <span className="text-white text-2xl font-medium">
                    Git Code
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-70">
            <img src={img4} alt="img4" className="w-150 h-100" />
          </div>
          <div className="flex flex-col justify-center max-w-xl pt-60 pb-20">
            <div className="flex flex-col gap-6">
              <span className="text-white text-2xl font-bold text-center">
                Tech-Z
              </span>
              <span className="text-gray-400 text-xl leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt rem odit labore unde nemo omnis sequi hic sit
                laudantium repellendus recusandae vitae ea laborum, ipsa nisi
                eos autem. Blanditiis consequuntur velit nesciunt aperiam odit
                excepturi repellat libero in enim praesentium! Ex dicta est
                suscipit ipsam voluptate tempora voluptatum quam distinctio
                minus saepe nobis nulla amet fugiat sit autem deserunt
                asperiores vitae ea, libero sed! Libero fugit non, placeat nulla
                quae odio asperiores ratione! Accusantium placeat dolorem minus
                eos excepturi modi.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nesciunt rem odit.
              </span>
              <div className="flex justify-center gap-20">
                <button className="border border-white text-white px-10 py-2 rounded-full text-xl font-medium">
                  Viwe
                </button>
                <div className="flex  justify-center items-center gap-2">
                  <FaGithub className="text-white text-6xl border-2 border-black  rounded-full" />
                  <span className="text-white text-2xl font-medium">
                    Git Code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ส่วนของเนื้อหาด้านขวา */}
        <div className="flex flex-col justify-center max-w-xl">
          <div className="flex flex-col gap-6">
            <span className="text-white text-2xl font-bold text-center">
              Learnify
            </span>
            <span className="text-gray-400 text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rem odit labore unde nemo omnis sequi hic sit laudantium
              repellendus recusandae vitae ea laborum, ipsa nisi eos autem.
              Blanditiis consequuntur velit nesciunt aperiam odit excepturi
              repellat libero in enim praesentium! Ex dicta est suscipit ipsam
              voluptate tempora voluptatum quam distinctio minus saepe nobis
              nulla amet fugiat sit autem deserunt asperiores vitae ea, libero
              sed! Libero fugit non, placeat nulla.
            </span>
            <div className="flex justify-center gap-20">
              <button className="border border-white text-white px-10 py-2 rounded-full text-xl font-medium">
                Viwe
              </button>
              <div className="flex  justify-center items-center gap-2">
                <FaGithub className="text-white text-6xl border-2 border-black  rounded-full" />
                <span className="text-white text-2xl font-medium">
                  Git Code
                </span>
              </div>
            </div>
          </div>
          <div className="pt-70">
            <img src={img3} alt="img3" className="w-150 h-100" />
          </div>
          <div className="flex flex-col justify-center max-w-xl pt-70">
            <div className="flex flex-col gap-6">
              <span className="text-white text-2xl font-bold text-center">
                Anime-X
              </span>
              <span className="text-gray-400 text-xl leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt rem odit labore unde nemo omnis sequi hic sit
                laudantium repellendus recusandae vitae ea laborum, ipsa nisi
                eos autem. Blanditiis consequuntur velit nesciunt aperiam odit
                excepturi repellat libero in enim praesentium! Ex dicta est
                suscipit ipsam voluptate tempora voluptatum quam distinctio
                minus saepe nobis nulla amet fugiat sit autem.
              </span>
              <div className="flex justify-center gap-20">
                <button className="border border-white text-white px-10 py-2 rounded-full text-xl font-medium">
                  Viwe
                </button>
                <div className="flex  justify-center items-center gap-2">
                  <FaGithub className="text-white text-6xl border-2 border-black  rounded-full" />
                  <span className="text-white text-2xl font-medium">
                    Git Code
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-70 pb-20">
            <img src={img5} alt="img5" className="w-150 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
