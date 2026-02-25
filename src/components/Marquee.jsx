import "@/css/Marquee.css";
import { icons } from "@/db/icons";

export default function Marquee() {
  return (
    <div className="marquee ">
      <div className="marquee__track">
        {icons.map((Icon, index) => (
          <div className="icon" key={index}>
            <Icon.skillIcon size={40} />
          </div>
        ))}
      </div>
      <div aria-hidden className="marquee__track">
        {icons.map((Icon, index) => (
          <div className="icon" key={index}>
            <Icon.skillIcon size={40} />
          </div>
        ))}
      </div>
    </div>
  );
}
