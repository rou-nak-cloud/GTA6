import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {

 let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

    useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: .7,
      x: "-40%",
      bottom: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);


  return (
    <> 
       <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

        {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[5rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[5rem] leading-none -ml-20">theft</h1>
                <h1 className="text-[5rem] leading-none -ml-40">auto</h1>
              </div>
              <img 
              // style={{ bottom: '-40%' }}
                className="absolute character bottom-[-40%] left-1/2 -translate-x-1/2  scale-[4] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-5 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-2xl ri-arrow-down-line"></i>
                <h3 className="text-xl ">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[100%] ">
              <div className="limg relative w-1/3 h-full">
                <img
                  className="absolute scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[60%] py-15 px-10">
                <h1 className="text-5xl">Still Running,</h1>
                <h1 className="text-4xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-sans">
            Grand Theft Auto VI (GTA 6) is the highly anticipated next chapter in Rockstar Games’ legendary open-world action series. Building on the massive success of GTA V, this installment aims to redefine what’s possible in open-world gaming, with cutting-edge graphics, deeper storylines, and an incredibly immersive environment.
            Set in a modern-day reimagining of Vice City (Rockstar’s fictional version of Miami), GTA 6 features a sprawling, dynamic world that reacts to players’ choices and actions like never before. From neon-lit downtown streets to sun-drenched beaches, the game’s map is expected to be one of Rockstar’s most ambitious yet — combining dense urban areas with vast rural and coastal regions.
                </p>
                <p className="mt-5 text-xl font-sans">
                 GTA 6 introduces new protagonists, rumored to include the series' first playable female lead. The story is expected to explore crime, loyalty, and ambition in a society shaped by money and power. With Rockstar’s signature satirical tone and cinematic storytelling, players can expect a gripping narrative and unforgettable characters.
                </p>
                <button className="bg-yellow-500 px-9 py-7 text-black mt-10 text-3xl rounded-2xl cursor-pointer hover:bg-yellow-700 transition-all duration-300">
                  Download Now
                </button>
              </div>
            </div>
          </div>
          </div>
         )}
    </>
  )
}

export default App
