import React, { useState } from "react";
import Information from "../information/information";
import DescriptionToggle from "../description/description";

const Hero = ({
  heading,
  type,
  processes,
  price,
  description,
  taste,
  service,
}) => {
  const [activeLink, setActiveLink] = useState("london");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="flex justify-between pb-3">
        <a
          href="/"
          className={activeLink === "london" ? "underline font-medium" : ""}
          onClick={() => handleLinkClick("london")}
        >
          LONDON DRY
        </a>
        <a
          href="/spiced"
          className={activeLink === "spice" ? "underline font-medium" : ""}
          onClick={() => handleLinkClick("spice")}
        >
          SPICED BLEND
        </a>
        <a
          href="/aperitif"
          className={activeLink === "aperitif" ? "underline font-medium" : ""}
          onClick={() => handleLinkClick("aperitif")}
        >
          APERITIF
        </a>
        <a
          href="/trio"
          className={activeLink === "trio" ? "underline font-medium" : ""}
          onClick={() => handleLinkClick("trio")}
        >
          TRIO
        </a>
      </div>
      <Information
        heading={heading}
        type={type}
        processes={processes}
        price={price}
      />
      <DescriptionToggle
        description={description}
        taste={taste}
        service={service}
      />
    </>
  );
};

export default Hero;
