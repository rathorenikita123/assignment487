/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import Hero from "../hero/hero";

const Carousel = ({
  images,
  heading,
  type,
  processes,
  price,
  description,
  taste,
  service,
}) => {
  const totalItems = images.length;
  const [currentCarouselItem, setCurrentCarouselItem] = useState(1);

  const handleItemClick = (index) => {
    setCurrentCarouselItem(index);
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-around">
      <div className="w-full md:w-1/2">
        <div className="carousel w-full">
          {images.map((imageUrl, index) => (
            <div
              key={`item${index + 1}`}
              className={`carousel-item ${
                index + 1 === currentCarouselItem ? "visible" : "hidden"
              } w-full justify-around`}
            >
              <div className="rounded-full overflow-hidden border border-black p-16">
                <img
                  src={imageUrl}
                  alt={`drink ${index + 1}`}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-2 gap-4">
          {[...Array(totalItems)].map((_, index) => (
            <button
              key={`button${index + 1}`}
              onClick={() => handleItemClick(index + 1)}
              className={`w-4 h-4 rounded-full border border-black ${
                index + 1 === currentCarouselItem ? "bg-black" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <Hero
          heading={heading}
          type={type}
          processes={processes}
          price={price}
          description={description}
          taste={taste}
          service={service}
        />
      </div>
    </div>
  );
};

export default Carousel;
