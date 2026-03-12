import "@/css/Hero.css";
import Marquee from "./Marquee";
import Image from "next/image";
import { basicInfo } from "@/db/basicInfo";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const conatacts = [
    {
      name: "LinkedIn",
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/arham-khan-36958a370/",
    },
  ];

  return (
    <div className="hero" id="home">
      <div className="heroContent">
        <span className="bigHeading gradientText">{basicInfo.name}</span>
        <h2 className="subHeading">{basicInfo.headline}</h2>
        <p className="normalText">{basicInfo.shortInfo}</p>
        <div className="heroBtns">
          <Link href="/#projects" className="gradientBtn">
            Checkout Projects
          </Link>
          {conatacts.map((contact, index) => (
            <div key={index}>
              <Link
                className="tinyBtn glass"
                target="_blank"
                href={contact.link}
              >
                <contact.Icon size={18} />
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Marquee />
        </div>
      </div>
      <div className="heroImage">
        <div className="heroImageOverlay">
          <Image
            src={basicInfo.heroImage}
            alt="heroImage"
            fill
            className="heroActualImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
