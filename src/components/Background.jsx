import Image from "next/image";
import React from "react";
import "@/css/Background.css";

function Background() {
  return (
    <div>
      <div className="pageBgGlassOverlay"></div>
      <div className="bgContainer">
        <div className="bgSubContainer">
          <Image src={"/bg.jpg"} alt="" fill priority />
        </div>
      </div>
    </div>
  );
}

export default Background;
