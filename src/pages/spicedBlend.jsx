import React from "react";
import Carousel from "../components/carousel/carousel";

const Spiced = () => {
  const spicedImages = [
    "./images/drink7.png",
    "./images/drink8.png",
  ];
  return (
    <div className="p-12">
      <Carousel
        heading={"SPICED BLEND"}
        type={"Caribbean Rum"}
        processes={"Blended"}
        price={29.95}
        description={
          "SBlending a duo of light and white Caribbean rums from Martinique and Dominican Republic as the smooth base. Spices are then added and the mix is allowed to steep for 2 days to draw out all of the flavour before being filtered and masterfully blended with natural distillates to 10%ABV. The result is a buttery, caramel-forward, savoury and spicy light spirit with a big impact both on the nose and the taste buds."
        }
        taste={
          "Deep bonfire toffee, warming savoury spice, rounded honey sweetness, buttery caramel throughout with a hint of tropical fruit."
        }
        service={
          "Simply serve 50ml chilled over ice with 150ml premium Ginger Ale and a lime wedge. 2.3% ABV."
        }
        images={spicedImages}
      />
    </div>
  );
};

export default Spiced;
