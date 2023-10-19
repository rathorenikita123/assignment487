const Information = ({heading, type, processes, price}) => {
  return (
    <div className="flex flex-col justify-between border-t border-black py-4 h-1/3">
      <div>
        <h1 className="font-medium text-2xl">{heading}</h1>
        <h2 className="text-2xl">
          <span className="text-lg italic">made with </span>
          {type}
        </h2>
      </div>
      <div className="flex justify-between"> 
        <p className="text-xl">
          {processes} <span className="italic">in</span> England
        </p>
        <p className="text-xl">10%vol / 700ml</p>
      </div>
      <div>
        <button className="btn bg-black text-white w-full rounded-3xl">£{price} - Add to bag</button>
        <p className="font-normal text-xl text-center my-2 text-primary">FREE UK DELIVERY</p>
      </div>
    </div>
  );
};

export default Information;
