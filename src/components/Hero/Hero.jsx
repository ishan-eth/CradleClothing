import React from "react";
import "./Hero.css";
import heroImage from "../../Assets/images/background-hero.jpg";
import blackTshirt from "../../Assets/images/blackhalfbranded.png";
import blackRotating from "../../Assets/images/compression2.gif";
import rotatingTshirt from "../../Assets/images/tshirt.gif";

export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} />
      <div className="hero-tshirts">
        <img src={blackTshirt} className="dark first" />
        <img src={rotatingTshirt} className="gif-tshirt" />
        <img src={blackTshirt} className="dark third" />
        <div className="text-less">
          <p>All New</p>
          <p>Compression Shirt</p>
          <hero>My Section</hero>
        </div>
        <img src={blackRotating} id="compression-hero" />
      </div>
    </div>
  );
}
