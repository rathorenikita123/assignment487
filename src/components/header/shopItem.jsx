const ShopItem = ({ title, description }) => (
    <div>
      <h1 className="font-medium text-2xl">{title}</h1>
      <h2 className="text-2xl">
        <span className="text-lg italic">made with</span> {description}
      </h2>
    </div>
  );

  export default ShopItem;