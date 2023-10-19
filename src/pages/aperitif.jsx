import React from "react";
import Carousel from "../components/carousel/carousel";

const Aperitif = () => {
  const aperitifImages = [
    "./images/drink4.png",
    "./images/drink5.png",
  ];
  return (
    <div className="p-12">
      <Carousel
        heading={"APERITIF"}
        type={"Heritage Botanicals"}
        processes={"Macerated"}
        price={29.95}
        description={
          "Using a special combination of botanicals, from the hedgerow to the vegetable patch. Chosen to tickle the taste buds with interesting hints of approachable bitterness, but cleverly rounded off with the tart strawberry and sweet grape to create the most adult and uniquely moreish of aperitifs. We macerate the botanicals for 2 days to extract maximum flavour, before carefully blending with the real fruit juices to create this distinctly delicious flavour."
        }
        taste={
          "Complex woody and herbal, full bodied guelder rose with slight floral characters. Sweet grape and subtle strawberry."
        }
        service={
          "Simply serve 50ml chilled over ice with 100ml English Sparkling Wine and a dash of premium soda. 10% ABV."
        }
        images={aperitifImages}
      />
    </div>
  );
};

export default Aperitif;
