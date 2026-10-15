import React from "react";
import Navbar from "../components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import css from "./../assets/css.png";
import figma from "./../assets/figma.png";
import html from "./../assets/html.png";
import java from "./../assets/java.png";
import firebase from "./../assets/firebase.png";
import react from "./../assets/react.png";
import node from "./../assets/node.png";
import spring from "./../assets/spring.png";

export default function Home() {
  return (
    <div>
      {/* ส่วนของ Navbar */}
      <Navbar pname={"Home"} colorLinkNavbar={"yellow"} />
      {/* ส่วนของเนื้อหา */}
      <div className="flex justify-between items-center pl-30 pr-30 pt-20 pb-40">
        {/* ส่วนของเนื้อหาด้านซ้าย */}
        <div className="flex flex-col gap-5">
          <span className="text-white text-6xl font-bold">Full Stack Web </span>
          <span className="text-white text-6xl font-bold">Developer ! </span>
          <span className="text-white text-2xl">
            Hi, I'm Thitipong SAU. A passwionate Full Stack Web Developer.
          </span>
          <span className="text-white text-2xl">
            Web Developer based in Thailand.
          </span>
          <div className="flex gap-5">
            <FaLinkedin className="text-white text-6xl border-2 border-black rounded-full" />
            <FaGithub className="text-white text-6xl border-2 border-black  rounded-full" />
          </div>
        </div>
        {/* ส่วนของเนื้อหาด้านขวา */}
        <div>
          <img
            src="https://images.pexels.com/photos/16476075/pexels-photo-16476075.jpeg"
            alt=""
            className="w-[450px] h-[450px] h-450px object-cover rounded-full"
          />
        </div>
      </div>
      {/*  ส่วนของ Tech Stack */}
      <div className="flex justify-center  ">
        <span className="text-white text-2xl font-semibold">My Tech Stack</span>
      </div>
      {/* ส่วนของ รูปภาพ Tech Stack  */}
      <div className="flex justify-center gap-10 pt-10 pb-10">
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={node} alt="node" />
        <img src={react} alt="react" />
        <img src={spring} alt="spring" />
        <img src={java} alt="java" />
        <img src={figma} alt="figma" />
        <img src={firebase} alt="firebase" />
      </div>
    </div>
  );
}
