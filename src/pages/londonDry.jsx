import React from "react";
import Carousel from "../components/carousel/carousel";

const London = () => {
  const londonImages = [
    "./images/drink1.png",
    "./images/drink2.png",
    "./images/drink3.png",
  ];
  return (
    <div className="p-12">
      <Carousel
        heading={"LONDON DRY"}
        type={"British Gen"}
        processes={"Distilled"}
        price={29.95}
        description={
          "LONDON DRY is perfect for those who love a G&T. It's full of flavour but at 10% ABV it means you can enjoy the same ritual and taste but just with less alcohol. The unique combination of botanicals are steeped for 24 hours, then distilled, capturing the essential oils and big flavours. Before being masterfully blended with natural flavours to boost the character and provide a long refreshing finish at just 10%."
        }
        taste={
          "Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with herbaceous backnotes."
        }
        service={
          "Simply serve 50ml chilled over ice with 150ml premium Indian Tonic and a lemon slice. 2.3% ABV."
        }
        images={londonImages}
      />
    </div>
  );
};

export default London;
