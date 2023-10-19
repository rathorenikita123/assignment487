import React from "react";
import Carousel from "../components/carousel/carousel";

const Trio = () => {
  const trioImages = [
    "./images/drink6.png",
    "./images/drink9.png",
  ];
  return (
    <div className="p-12">
      <Carousel
        heading={"TRIO"}
        type={"London Dry, Spiced Blend & Aperitif"}
        processes={"Made"}
        price={79.85}
        description={
          "The complete tasting set. Made up of LONDON DRY heavy with juniper but light with citrus, rounded off with a subtle woody undertone. SPICED BLEND using a duo of light and white Caribbean rums from Martinique and Dominican Republic as its smooth base packed full of buttery dark caramel and spices. APERITIF a special combination of botanicals, from the hedgerow to the vegetable carefully blended with the floral sweetness of Strawberries."
        }
        taste={
          "LONDON DRY Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with woody spiced backnotes. SPICED BLEND Deep caramel, warming savoury spice, rounded honey sweetness, buttery throughout with a hint of tropical fruit. APERITIF Complex woody and herbal, full bodied guelder rose with slight floral characters. Sweet grape and subtle strawberry."
        }
        service={
          "Simply serve 50ml LONDON DRY chilled over ice with 150ml premium Indian Tonic and a lemon slice / 50ml SPICED BLEND chilled over ice with 150ml premium Ginger Ale and a lime wedge / 50ml APERITIF chilled over ice with 100ml English Sparkling Wine and a dash of premium soda."
        }
        images={trioImages}
      />
    </div>
  );
};

export default Trio;
