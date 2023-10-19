import React, { useState } from "react";

const DescriptionToggle = ({ description, taste, service }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [istasteVisible, settasteVisible] = useState(false);
  const [isServiceVisible, setServiceVisible] = useState(false);

  const toggleVisibility = (type) => {
    switch (type) {
      case "description":
        setDescriptionVisible(!isDescriptionVisible);
        settasteVisible(false);
        setServiceVisible(false);
        break;
      case "taste":
        settasteVisible(!istasteVisible);
        setDescriptionVisible(false);
        setServiceVisible(false);
        break;
      case "service":
        setServiceVisible(!isServiceVisible);
        setDescriptionVisible(false);
        settasteVisible(false);
        break;
      default:
        break;
    }
  };

  const getToggleIcon = (isVisible) => (isVisible ? "-" : "+");

  return (
    <div>
      <div
        onClick={() => toggleVisibility("description")}
        className="flex justify-between border-y border-black p-2"
      >
        <h1 className="font-normal text-xl uppercase">Description</h1>
        <div className="flex flex-col items-end">
          <button className="text-3xl">
            {getToggleIcon(isDescriptionVisible)}
          </button>
          {isDescriptionVisible && <p className="ml-[-8rem]">{description}</p>}
        </div>
      </div>
      <div
        onClick={() => toggleVisibility("taste")}
        className="flex justify-between border-b border-black p-2"
      >
        <h1 className="font-normal text-xl uppercase">Taste</h1>
        <div className="flex flex-col items-end">
          <button className="text-3xl">{getToggleIcon(istasteVisible)}</button>
          {istasteVisible && <p className="ml-[-3.3rem]">{taste}</p>}
        </div>
      </div>
      <div
        onClick={() => toggleVisibility("service")}
        className="flex justify-between border-b border-black p-2"
      >
        <h1 className="font-normal text-xl uppercase">Service</h1>
        <div className="flex flex-col items-end">
          <button className="text-3xl">
            {getToggleIcon(isServiceVisible)}
          </button>
          {isServiceVisible && <p className="ml-[-4.8rem]">{service}</p>}
        </div>
      </div>
    </div>
  );
};

export default DescriptionToggle;
